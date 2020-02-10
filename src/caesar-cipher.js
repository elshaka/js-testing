const CaesarCipher = (() => {
  const caesar = (message, key, op = 1) => {
    if (key === 0) { return message; }
    if (key < 0) { key = 26 + key; }

    return message.replace(/\w/g, c => String.fromCharCode(
      ((c.charCodeAt() - 97 + op * key) % 26) + 97,
    ));
  };

  const encrypt = (message, key) => caesar(message, key);

  const decrypt = (message, key) => caesar(message, key, -1);

  return { encrypt, decrypt };
})();

module.exports = CaesarCipher;
