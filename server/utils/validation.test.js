const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () =>
{
  it('should reject non-strings', () =>
  {
    expect(isRealString(100)).toBe(false);
  });

  it('should reject strings with only whitespace', () =>
  {
    expect(isRealString('     \t  ')).toBe(false);
  });

  it('should accept valid strings', () =>
  {
    expect(isRealString('  Something with extra spaces  ')).toBe(true);
  });
});
