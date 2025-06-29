function parse(tokens) {
  let ast = {
    type: 'DiacoreProgram',
    body: []
  };
  let cursor = 0;
  // ... logic to read tokens and build the AST ...
  while (cursor < tokens.length) {
    let token = tokens[cursor];
    if (token.type === 'HEADING') {
      // ... create an AST node for a heading ...
    } else if (token.type === 'BUTTON') {
      // ... create an AST node for a button ...
    }
    // ... more logic for other elements ...
    cursor++;
  }
  return ast;
}
