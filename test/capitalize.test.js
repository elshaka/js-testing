const capitalize = require('../src/capitalize');

test('it capitalizes a string', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});

test('it does not blow up with an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('it does not blow up with a single char string', () => {
  expect(capitalize('a')).toBe('A');
});

test('it does not change an already capitalized string', () => {
  expect(capitalize('ALREADY')).toBe('ALREADY');
});
