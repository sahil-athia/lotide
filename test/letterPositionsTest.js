const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

describe("#letterPositions", () => {
  it("shoud return [1] for ('hello').e", () => {  
    assert.deepEqual(letterPositions("hello").e, [1])
  })

  it("should return [3, 5, 15, 18] for ('lighthouse in the house').h ", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18])
  })
})

