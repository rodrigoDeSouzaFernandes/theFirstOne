let randomNumber = require('./exercise01');

describe('Testing random number', () => {
  it('should return 10', () => {
    randomNumber = jest
    .fn()
    .mockReturnValue(10 );

    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
})