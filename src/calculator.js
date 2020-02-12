const Calculator = (() => {
  const sum = (a, b) => a + b;
  const substract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => {
    if (b === 0) {
      throw new Error('Cannot divide by zero!');
    }
    return a / b;
  };

  return {
    sum, substract, multiply, divide,
  };
})();

module.exports = Calculator;
