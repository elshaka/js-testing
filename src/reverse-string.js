const reverseString = (str) => {
  if (typeof str !== 'string') { throw new Error('You must supply a string!'); }
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
};

module.exports = reverseString;
