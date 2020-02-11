const analyze = require('../src/array-analysis');

const array = [1, 8, 3, 4, 2, 6];
const obj = analyze(array);

test('it analyses an array and returns an object', () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4, min: 1, max: 8, length: 6,
  });
});

test('object returned has an average property', () => {
  expect(obj.average).toBe(4);
});

test('object returned has an min property', () => {
  expect(obj.min).toBe(1);
});

test('object returned has an max property', () => {
  expect(obj.max).toBe(8);
});

test('object returned has an length property', () => {
  expect(obj.length).toBe(6);
});

test('throws an error if array given is empty', () => {
  expect(() => { analyze([]); }).toThrow('Array cannot be empty!');
});

test('throws an error if anything but an array is given', () => {
  expect(() => { analyze(6); }).toThrow('Must supply an Array!');
});
