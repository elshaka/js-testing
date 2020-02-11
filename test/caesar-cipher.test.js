const CaesarCipher = require('../src/caesar-cipher');

describe('#encrypt', () => {
  test('it correctly encrypts a message', () => {
    expect(CaesarCipher.encrypt('defend the east wall of the castle', 1))
      .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
  });

  test('it correctly deals with upcased characters', () => {
    expect(CaesarCipher.encrypt('DEFEND the east wall of THE CASTLE', 1))
      .toBe('EFGFOE uif fbtu xbmm pg UIF DBTUMF');
  });

  test('it ignores punctuation and other symbols', () => {
    expect(CaesarCipher.encrypt('DEFEND!!!, the east wall of THE CASTLE!!!.', 1))
      .toBe('EFGFOE!!!, uif fbtu xbmm pg UIF DBTUMF!!!.');
  });
});