const caesarCipher = require('../src/caesar-cipher');

describe('#encrypt', () => {
  test('it correctly encrypts a message', () => {
    expect(caesarCipher.encrypt('defend the east wall of the castle', 1))
      .toBe('efgfoe uif fbtu xbmm pg uif dbtumf');
  });

  test('it correctly deals with upcased characters', () => {
    expect(caesarCipher.encrypt('DEFEND the east wall of THE CASTLE', 1))
      .toBe('EFGFOE uif fbtu xbmm pg UIF DBTUMF');
  });

  test('it ignores punctuation and other symbols', () => {
    expect(caesarCipher.encrypt('DEFEND!!!, the east wall of THE CASTLE!!!.', 1))
      .toBe('EFGFOE!!!, uif fbtu xbmm pg UIF DBTUMF!!!.');
  });

  test('it should wrap from z to a', () => {
    expect(caesarCipher.encrypt('zzz zz z', 1)).toBe('aaa aa a');
  });

  test('it should not blow up with an empty string', () => {
    expect(caesarCipher.encrypt('', 2)).toBe('');
  });
});
