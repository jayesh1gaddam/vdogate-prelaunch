# JSON Parser (No stdlib JSON)

A compact JSON lexer/parser in Go without using `encoding/json` or any external dependencies. It returns:

- object: `map[string]any`
- array: `[]any`
- string: `string` (supports escapes and `\uXXXX`, including surrogate pairs)
- number: `float64` (with fractional and exponent)
- boolean: `bool`
- null: `nil`

## Usage

```go
package main

import (
	"fmt"
	"github.com/vdogate/jsonparser"
)

func main() {
	v, err := jsonparser.Parse([]byte(`{"x":[1,2.5,true,null,"ok"]}`))
	if err != nil {
		panic(err)
	}
	fmt.Printf("%#v\n", v)
}
```

## Run tests

```bash
cd tools/jsonparser
go test ./...
```

## Run CodeRabbit review locally

1. Install CLI
```bash
curl -fsSL https://cli.coderabbit.ai/install.sh | sh
```

2. Set API key (create one in CodeRabbit Settings → API Keys)
```bash
export CODERABBIT_API_KEY="YOUR_TOKEN"
```

3. Review only this module
```bash
cd tools/jsonparser
coderabbit review --plain
```

4. Or review the whole repository
```bash
cd ../../
coderabbit review --plain
```

After the report is generated, apply suggestions and re-run until clean.



