const expect = require("chai").expect;

const { add, substract } = require("../src/math/index");

describe("Math add and substract", () => {
  it("should return equal 7", () => {
    expect(add(3, 4)).to.be.equal(7);
  });

  it("should return equal 3", () => {
    expect(substract(4, 1)).to.be.equal(3);
  });
});
