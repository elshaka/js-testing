const reverseString = (str) => {
  try {
    if (typeof str !== 'string') { throw new Error('You must supply a string!'); }
  } catch (err) { return err.toString(); }
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result;
};

module.exports = reverseString;
