const capitalize = require('../src/capitalize');

test('it capitalizes a string', () => {
  expect(capitalize('microverse')).toBe('Microverse');
});

test('it does not blow up with an empty string', () => {
  expect(capitalize('')).toBe('');
});
