const assert = require("chai").assert;
const eqArrays = require("../eqArrays");

describe("#eqArrays", () => {
  it("should return true for two empty arrays", () => {
    assert.equal(eqArrays([], []), true)
  })

  it("should return true for one empty and a one element array", () => {
    assert.equal(eqArrays([], [1]), false)
  })

  it("should return true for 2 arrays with the same numbers in it", () => {
    assert.equal(eqArrays([1, 2, 3], [1, 2, 3]), true)
  })

  it("should return false for two arrays with opposite numbers", () => {
    assert.equal(eqArrays([1, 2, 3], [3, 2, 1]), false)
  })

  it("should return true for 2 nested arrays with the same elements", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)
  })

  it("should return false for 2 nested arrays with different elements", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)
  })

  it("should return false for arrays with nested elements vs non nested elements", () => {
    assert.equal(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)
  })
})

