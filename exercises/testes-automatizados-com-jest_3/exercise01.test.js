let randomNumber = require('./exercise01');

describe('Testing random number', () => {
  it('EX1 - should return 10', () => {
    randomNumber = jest
    .fn()
    .mockReturnValue(10 );

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  });
  it('EX2 - new implementation', () => {
    randomNumber = jest
    .fn()
    .mockImplementationOnce((a, b) => a / b);
    expect(randomNumber(6, 3)).toBe(2);
    expect(randomNumber(9, 3)).toBe(undefined);
  })
  it('EX3 - reset implementation', () => {
    randomNumber = jest
    .fn()
    .mockImplementation((a, b, c) => a * b * c);
    expect(randomNumber(2, 2, 2)).toBe(8);
    expect(randomNumber).toHaveBeenCalled();
    randomNumber
    .mockReset()
    .mockImplementation(a => a * 2);
    expect(randomNumber(2)).toBe(4);
  })
});

