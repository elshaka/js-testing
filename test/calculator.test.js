const Calculator = require('../src/calculator');

describe('#add', () => {
  test('it adds two numbers', () => {
    expect(Calculator.sum(1, 2)).toBe(3);
  });
});

describe('#substract', () => {
  test('it substracts two numbers', () => {
    expect(Calculator.substract(1, 2)).toBe(-1);
  });
});

describe('#divide', () => {
  test('it divides two numbers', () => {
    expect(Calculator.divide(4, 2)).toBe(2);
  });
  test('it throws an error if you try to divide by zero', () => {
    expect(() => { Calculator.divide(4, 0); }).toThrow(/zero/i);
  });
});

describe('#multiply', () => {
  test('it multiplies two numbers', () => {
    expect(Calculator.multiply(5, 8)).toBe(40);
  });
});
