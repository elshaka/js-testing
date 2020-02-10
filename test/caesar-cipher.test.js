const CaesarCipher = require('../src/caesar-cipher');

test('it correctly encrypts a message', () => {
  expect(CaesarCipher.encrypt('defend the east wall of the castle', 1))
    .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
});

test('it correctly decrypts a message', () => {
  expect(CaesarCipher.decrypt('efgfoe uif fbtu xbmm pg uif dbtumf', 1))
    .toBe('defend the east wall of the castle');
});
