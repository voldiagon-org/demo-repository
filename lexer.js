function tokenize(input) {
  let tokens = [];
  let cursor = 0;
  // ... logic to read input character by character and create tokens ...
  while (cursor < input.length) {
    let char = input[cursor];
    if (char === '<') {
      // ... handle HTML tags like <a> ...
    } else if (char === '@') {
      // ... handle '@' symbol ...
    }
    // ... more logic for keywords, symbols, etc. ...
    cursor++;
  }
  return tokens;
}
