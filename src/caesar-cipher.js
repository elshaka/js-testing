const caesarCipher = (() => {
  const caesar = (message, key, op = 1) => {
    if (key % 26 === 0) { return message; }
    if (key < 0) { key = 26 + key; }

    return message.replace(/[a-z]/ig, (c) => {
      const offset = c.charCodeAt() < 97 ? 65 : 97;
      return String.fromCharCode(((c.charCodeAt() - offset + op * key) % 26) + offset);
    });
  };

  const encrypt = (message, key) => caesar(message, key);

  const decrypt = (message, key) => caesar(message, key, -1);

  return { encrypt, decrypt };
})();

module.exports = caesarCipher;
