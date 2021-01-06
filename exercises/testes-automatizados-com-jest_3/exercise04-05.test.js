let { uppercase, firstLetter, concatenate } = require('./exercise04-05')
jest.mock('./exercise04-05')

describe('mocking modules', () => {
  it('EX4 - new implementation', () => {
    uppercase.mockImplementation(string => string.toLowerCase());
    expect(uppercase('RODRIGO')).toBe('rodrigo');
    firstLetter.mockImplementation(string => string[string.length - 1]);
    expect(firstLetter('Rodrigo')).toBe('o');
    concatenate.mockImplementation((str1, str2, str3) => str1 + str2 + str3);
    expect(concatenate('a', 'b', 'c')).toBe('abc');
  });
  it('EX5 - restore implementation', () => {
    uppercase.mockImplementation(string => string.toLowerCase());
    expect(uppercase('RODRIGO')).toBe('rodrigo');
    uppercase.mockReset().mockImplementation(string => string.toUpperCase())
    expect(uppercase('rodrigo')).toBe('RODRIGO');
  })
});