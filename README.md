**Veroxio** <br>

A JavaScript white space parser.<br>

There are many benifits to using Veroxio over parsing it manually, here are some of the pros of using Veroxio.

- Has a built in keyword parser
- Fast
- Lightweight<br>

# Usage

Using Veroxio is very simple.

```js
// Require the module
const Veroxio = require("veroxio");
// Create some grammar, uses the GrammarData typedef.
const grammar = [
  {
    call: "log",
    start: "`", // leave blank if the first argument doesnt have to start with anything specific
    end: "`", // leave blank if the last argument doesnt have to end with anything specific
  },
];
// Make an example function to parse a string
function Parse(string) {
  const Parsed = Veroxio(string, grammar); // Veroxio is a function, and will allow you to parse your string.
  // Look through all parsed data which has the keyword of "log"
  Veroxio.keywords(Parsed, "log").map((data) => {
    console.log(data.argsString);
  });
  /*
    Summary of this function:
    Parse's whatever string is supplied through the function
    Then it will map through all pieces of parsed data which have the keyword of log, and will return an array of VeroxioReturns object. (See below for VeroxioReturns object.)
    */
}
// Using it
Parse(`
log Created by Salvage_Dev
log "test"
`);
// This will log:
// test
// reasoning is that we don't put the start and end arg around the first line.
```

**VeroxioReturns type definition**<br>

```
VeroxioReturns:
    keyword: String,
    nextArg: String,
    args: String[],
    argsString: String
```

**GrammarData type definition**<br>

```
GrammarData
    call: String,
    start: String,
    end: String
```

I hope this module can help you!
<br><br>

**Written by Salvage_Dev with love <3**
<br><br>
Please note! If you have a suggestion, please create an issue in the github repo and I will read it.