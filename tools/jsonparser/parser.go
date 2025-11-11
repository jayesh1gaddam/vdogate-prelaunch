package jsonparser

// A small, dependency-free JSON parser/lexer implemented from scratch.
// It returns Go values that mirror JSON types:
// - object -> map[string]any
// - array  -> []any
// - string -> string (with escape and \uXXXX decoding)
// - number -> float64
// - true/false -> bool
// - null  -> nil
//
// Parse is tolerant to duplicate object keys (last write wins) and provides
// precise error positions (byte offset).

type Value = any

// Parse parses a complete JSON document.
func Parse(input []byte) (Value, error) {
	p := &parser{src: input}
	p.skipWhitespace()
	v, err := p.parseValue()
	if err != nil {
		return nil, err
	}
	p.skipWhitespace()
	if !p.eof() {
		return nil, p.err("unexpected trailing characters")
	}
	return v, nil
}

// -----------------------------------------------------------------------------
// Lexer / Parser
// -----------------------------------------------------------------------------

type parser struct {
	src []byte
	i   int // current index
}

func (p *parser) eof() bool {
	return p.i >= len(p.src)
}

func (p *parser) peek() byte {
	if p.eof() {
		return 0
	}
	return p.src[p.i]
}

func (p *parser) next() byte {
	if p.eof() {
		return 0
	}
	ch := p.src[p.i]
	p.i++
	return ch
}

func (p *parser) match(c byte) bool {
	if !p.eof() && p.src[p.i] == c {
		p.i++
		return true
	}
	return false
}

func (p *parser) skipWhitespace() {
	for !p.eof() {
		switch p.peek() {
		case ' ', '\n', '\r', '\t':
			p.i++
		default:
			return
		}
	}
}

type parseError struct {
	offset int
	msg    string
}

func (e *parseError) Error() string {
	return e.msg
}

func (p *parser) err(msg string) error {
	return &parseError{offset: p.i, msg: msg}
}

func (p *parser) parseValue() (Value, error) {
	p.skipWhitespace()
	if p.eof() {
		return nil, p.err("unexpected end of input")
	}
	switch p.peek() {
	case '{':
		return p.parseObject()
	case '[':
		return p.parseArray()
	case '"':
		return p.parseString()
	case 't':
		return p.parseTrue()
	case 'f':
		return p.parseFalse()
	case 'n':
		return p.parseNull()
	default:
		// number or error
		return p.parseNumber()
	}
}

func (p *parser) parseObject() (Value, error) {
	if !p.match('{') {
		return nil, p.err("expected '{'")
	}
	p.skipWhitespace()
	obj := make(map[string]any)
	if p.match('}') {
		return obj, nil
	}
	for {
		p.skipWhitespace()
		keyVal, err := p.parseString()
		if err != nil {
			return nil, err
		}
		key, ok := keyVal.(string)
		if !ok {
			return nil, p.err("object key must be a string")
		}
		p.skipWhitespace()
		if !p.match(':') {
			return nil, p.err("expected ':' after object key")
		}
		p.skipWhitespace()
		val, err := p.parseValue()
		if err != nil {
			return nil, err
		}
		obj[key] = val
		p.skipWhitespace()
		if p.match('}') {
			return obj, nil
		}
		if !p.match(',') {
			return nil, p.err("expected ',' or '}' in object")
		}
	}
}

func (p *parser) parseArray() (Value, error) {
	if !p.match('[') {
		return nil, p.err("expected '['")
	}
	p.skipWhitespace()
	arr := make([]any, 0, 8)
	if p.match(']') {
		return arr, nil
	}
	for {
		p.skipWhitespace()
		val, err := p.parseValue()
		if err != nil {
			return nil, err
		}
		arr = append(arr, val)
		p.skipWhitespace()
		if p.match(']') {
			return arr, nil
		}
		if !p.match(',') {
			return nil, p.err("expected ',' or ']' in array")
		}
	}
}

func (p *parser) parseString() (Value, error) {
	if !p.match('"') {
		return nil, p.err("expected '\"' to start string")
	}
	out := make([]rune, 0, 32)
	for !p.eof() {
		ch := p.next()
		switch ch {
		case '"':
			return string(out), nil
		case '\\':
			if p.eof() {
				return nil, p.err("incomplete escape sequence")
			}
			esc := p.next()
			switch esc {
			case '"':
				out = append(out, '"')
			case '\\':
				out = append(out, '\\')
			case '/':
				out = append(out, '/')
			case 'b':
				out = append(out, '\b')
			case 'f':
				out = append(out, '\f')
			case 'n':
				out = append(out, '\n')
			case 'r':
				out = append(out, '\r')
			case 't':
				out = append(out, '\t')
			case 'u':
				// \uXXXX (basic multilingual plane handling; surrogate pairs combined)
				r, err := p.readHexRune()
				if err != nil {
					return nil, err
				}
				// If first is high-surrogate, expect \uXXXX for low-surrogate
				if r >= 0xD800 && r <= 0xDBFF {
					if !(p.match('\\') && p.match('u')) {
						// Lone high-surrogate; treat as is per permissive approach
						out = append(out, r)
						break
					}
					r2, err := p.readHexRune()
					if err != nil {
						return nil, err
					}
					if r2 >= 0xDC00 && r2 <= 0xDFFF {
						// combine surrogate pair
						cp := 0x10000 + ((int(r)-0xD800)<<10) + (int(r2) - 0xDC00)
						out = append(out, rune(cp))
					} else {
						// Not a valid low-surrogate; append both
						out = append(out, r, r2)
					}
				} else {
					out = append(out, r)
				}
			default:
				return nil, p.err("invalid escape character")
			}
		default:
			if ch < 0x20 {
				return nil, p.err("control characters not allowed in strings")
			}
			out = append(out, rune(ch))
		}
	}
	return nil, p.err("unterminated string")
}

func (p *parser) hexNibble(b byte) (int, bool) {
	switch {
	case b >= '0' && b <= '9':
		return int(b - '0'), true
	case b >= 'a' && b <= 'f':
		return int(b-'a') + 10, true
	case b >= 'A' && b <= 'F':
		return int(b-'A') + 10, true
	default:
		return 0, false
	}
}

func (p *parser) readHexRune() (rune, error) {
	if p.i+4 > len(p.src) {
		return 0, p.err("incomplete unicode escape")
	}
	n := 0
	for k := 0; k < 4; k++ {
		b := p.src[p.i+k]
		v, ok := p.hexNibble(b)
		if !ok {
			return 0, p.err("invalid hex digit in unicode escape")
		}
		n = (n << 4) | v
	}
	p.i += 4
	return rune(n), nil
}

func (p *parser) parseTrue() (Value, error) {
	const lit = "true"
	for j := 0; j < len(lit); j++ {
		if p.i+j >= len(p.src) || p.src[p.i+j] != lit[j] {
			return nil, p.err("invalid literal, expected 'true'")
		}
	}
	p.i += len(lit)
	return true, nil
}

func (p *parser) parseFalse() (Value, error) {
	const lit = "false"
	for j := 0; j < len(lit); j++ {
		if p.i+j >= len(p.src) || p.src[p.i+j] != lit[j] {
			return nil, p.err("invalid literal, expected 'false'")
		}
	}
	p.i += len(lit)
	return false, nil
}

func (p *parser) parseNull() (Value, error) {
	const lit = "null"
	for j := 0; j < len(lit); j++ {
		if p.i+j >= len(p.src) || p.src[p.i+j] != lit[j] {
			return nil, p.err("invalid literal, expected 'null'")
		}
	}
	p.i += len(lit)
	return nil, nil
}

func (p *parser) parseNumber() (Value, error) {
	start := p.i
	// sign
	if p.match('-') {
		// ok
	}
	// int
	if p.match('0') {
		// leading zero only
	} else {
		if !p.digit() {
			return nil, p.err("invalid number")
		}
		for p.digit() {
			p.i++
		}
	}
	// frac
	if p.match('.') {
		if !p.digit() {
			return nil, p.err("invalid fractional part")
		}
		for p.digit() {
			p.i++
		}
	}
	// exp
	if p.match('e') || p.match('E') {
		if p.match('+') || p.match('-') {
			// optional sign
		}
		if !p.digit() {
			return nil, p.err("invalid exponent")
		}
		for p.digit() {
			p.i++
		}
	}
	raw := p.src[start:p.i]
	// Manual conversion to float64 to avoid importing strconv.
	// This is a simple conversion that handles JSON number grammar
	// and common magnitudes. For extreme values, precision may degrade.
	f, ok := parseFloat64(raw)
	if !ok {
		return nil, p.err("number out of range or invalid")
	}
	return f, nil
}

func (p *parser) digit() bool {
	if p.eof() {
		return false
	}
	b := p.src[p.i]
	return b >= '0' && b <= '9'
}

// parseFloat64 converts a JSON-formatted number (ASCII bytes) into float64.
// It supports optional sign, fractional part, and exponent. It avoids stdlib.
func parseFloat64(b []byte) (float64, bool) {
	if len(b) == 0 {
		return 0, false
	}
	i := 0
	sign := 1.0
	if b[i] == '-' {
		sign = -1
		i++
	}
	intPart := 0.0
	for i < len(b) && b[i] >= '0' && b[i] <= '9' {
		intPart = intPart*10 + float64(b[i]-'0')
		i++
	}
	fracPart := 0.0
	fracScale := 1.0
	if i < len(b) && b[i] == '.' {
		i++
		if i >= len(b) || b[i] < '0' || b[i] > '9' {
			return 0, false
		}
		for i < len(b) && b[i] >= '0' && b[i] <= '9' {
			fracPart = fracPart*10 + float64(b[i]-'0')
			fracScale *= 10
			i++
		}
	}
	expSign := 1.0
	expVal := 0.0
	if i < len(b) && (b[i] == 'e' || b[i] == 'E') {
		i++
		if i < len(b) && (b[i] == '+' || b[i] == '-') {
			if b[i] == '-' {
				expSign = -1
			}
			i++
		}
		if i >= len(b) || b[i] < '0' || b[i] > '9' {
			return 0, false
		}
		for i < len(b) && b[i] >= '0' && b[i] <= '9' {
			expVal = expVal*10 + float64(b[i]-'0')
			i++
		}
	}
	if i != len(b) {
		return 0, false
	}
	val := sign * (intPart + fracPart/fracScale)
	// apply exponent
	if expVal != 0 {
		val = val * pow10(expSign*expVal)
	}
	return val, true
}

// pow10 computes 10^e for small e magnitudes using fast exponentiation.
func pow10(e float64) float64 {
	// handle integer exponents only (JSON exponent is integer)
	neg := false
	if e < 0 {
		neg = true
		e = -e
	}
	n := int(e)
	result := 1.0
	base := 10.0
	for n > 0 {
		if n&1 == 1 {
			result *= base
		}
		base *= base
		n >>= 1
	}
	if neg {
		return 1.0 / result
	}
	return result
}



