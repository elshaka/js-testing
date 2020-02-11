const analyze = require('../src/array-analysis');

test('it analyses an array and returns an object with values of an average, min, max and length', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('throws an error if array given is empty', () => {
  expect(() => { analyze([]); }).toThrow('Array cannot be empty!');
});

test('throws an error if anything but an array is given', () => {
  expect(() => { analyze(6); }).toThrow('Must supply an Array!');
});
