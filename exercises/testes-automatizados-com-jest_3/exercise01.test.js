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
});

