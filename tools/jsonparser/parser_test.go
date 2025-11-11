package jsonparser

import "testing"

func TestParse_Primitives(t *testing.T) {
	cases := []struct {
		in   string
		want any
	}{
		{`null`, nil},
		{`true`, true},
		{`false`, false},
		{`0`, float64(0)},
		{`-0`, float64(0)},
		{`123`, float64(123)},
		{`-123`, float64(-123)},
		{`12.34`, 12.34},
		{`1e3`, 1000.0},
		{`-2E2`, -200.0},
		{`"hello"`, "hello"},
		{`"\n\t"`, "\n\t"},
		{`"\u0041"`, "A"},
	}
	for _, tc := range cases {
		got, err := Parse([]byte(tc.in))
		if err != nil {
			t.Fatalf("Parse(%s) error: %v", tc.in, err)
		}
		if !equal(got, tc.want) {
			t.Fatalf("Parse(%s) = %#v, want %#v", tc.in, got, tc.want)
		}
	}
}

func TestParse_ArrayObject(t *testing.T) {
	in := `{"a":1,"b":[true,false,null,"x"],"c":{"d":"y"}}`
	v, err := Parse([]byte(in))
	if err != nil {
		t.Fatalf("Parse error: %v", err)
	}
	m, ok := v.(map[string]any)
	if !ok {
		t.Fatalf("root not object: %#v", v)
	}
	if !equal(m["a"], float64(1)) {
		t.Fatalf("a != 1: %#v", m["a"])
	}
	if !equal(m["c"].(map[string]any)["d"], "y") {
		t.Fatalf("c.d != y")
	}
	arr := m["b"].([]any)
	if len(arr) != 4 {
		t.Fatalf("b length != 4: %d", len(arr))
	}
}

func TestErrors(t *testing.T) {
	bad := []string{
		`{`,
		`[`,
		`{"a":}`,
		`"unterminated`,
		`00`,
		`1e`,
		`{"a" "b"}`,
	}
	for _, in := range bad {
		_, err := Parse([]byte(in))
		if err == nil {
			t.Fatalf("expected error for %q", in)
		}
	}
}

// Minimal deep equality for test purposes (to avoid importing reflect).
func equal(a, b any) bool {
	switch av := a.(type) {
	case nil:
		return b == nil
	case bool:
		bv, ok := b.(bool)
		return ok && av == bv
	case float64:
		bv, ok := b.(float64)
		return ok && av == bv
	case string:
		bv, ok := b.(string)
		return ok && av == bv
	case []any:
		bv, ok := b.([]any)
		if !ok || len(av) != len(bv) {
			return false
		}
		for i := range av {
			if !equal(av[i], bv[i]) {
				return false
			}
		}
		return true
	case map[string]any:
		bv, ok := b.(map[string]any)
		if !ok || len(av) != len(bv) {
			return false
		}
		for k, v := range av {
			if !equal(v, bv[k]) {
				return false
			}
		}
		return true
	default:
		return false
	}
}



