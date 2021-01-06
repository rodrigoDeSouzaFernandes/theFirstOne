const random = require('./randomNumber');

describe('testes com mock', () => {
  it('randomNumber é chamada quando invocamos isDivisible', () => {
    random.randomNumber = jest.fn().mockReturnValue(20)
    random.randomNumber()
    expect(random.randomNumber).toHaveBeenCalled();
  })
})