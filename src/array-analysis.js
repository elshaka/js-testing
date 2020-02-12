const analyzeArray = (array) => {
  if (!Array.isArray(array)) { throw new Error('Must supply an Array!'); }
  if (!array.length) { throw new Error('Array cannot be empty!'); }
  const sum = array.reduce((prev, cur) => prev + cur, 0);
  const { length } = array;
  const average = sum / length;
  const min = Math.min(...array);
  const max = Math.max(...array);
  const obj = {
    average, min, max, length,
  };

  return obj;
};
module.exports = analyzeArray;
