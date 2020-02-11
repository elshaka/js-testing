const reverseString = require('../src/reverse-string');

test('it reverses a string', () => {
  expect(reverseString('microverse')).toBe('esrevorcim');
});

test('it does not blow up with an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('it does not blow up with a single char string', () => {
  expect(reverseString('a')).toBe('a');
});

test('it throws an error if a string is not supplied', () => {
  expect(() => { reverseString(5); }).toThrow('You must supply a string!');
});
