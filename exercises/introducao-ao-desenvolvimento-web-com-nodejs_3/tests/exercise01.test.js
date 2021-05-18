const { expect } = require('chai');

const numberIs = require('../Func/exercise02')

describe("dirá se um número é positivo, negativo ou neutro", () => {
  it("no caso de ser positivo", () => {
    expect(numberIs(5)).to.be.equal("positivo")
    expect(numberIs(1)).to.be.equal("positivo")
  });
  it("no caso de ser negativo", () => {
    expect(numberIs(-10)).to.be.equal("negativo")
    expect(numberIs(-1)).to.be.equal("negativo")
  });
  it("no caso de ser neutro", () => {
    expect(numberIs(0)).to.be.equal("neutro")
  });
});
