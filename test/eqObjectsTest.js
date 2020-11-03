const assert = require("chai").assert
const eqObjects = require("../eqObjects")

describe("#eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4], };
  const a = {4: 2, 3:4};
  const b = {3: 4, 1:2};
  const test1 = {y: "1", x: [1, "3"]};
  const test2 = {x: [1, "3"], y: "1"};
  const test3 = {y: "1", x:[1, "3", "e"] };
  const eb = {1:2, 3:4, 5:6};

  it(`should return true for { a: "1", b: "2" } vs { b: "2", a: "1" }`, () => {
    assert.equal(eqObjects(ab, ba), true)
  })

  it(`should return false for { a: "1", b: "2" } vs { a: "1", b: "2", c: "3" }`, () => {
    assert.equal(eqObjects(ab, abc), false)
  })

  it(`should return true for { c: "1", d: ["2", 3] } vs { d: ["2", 3], c: "1" } `, () => {
    assert.equal(eqObjects(cd, dc), true)
  })

  it(`should return false for { c: "1", d: ["2", 3] } vs { c: "1", d: ["2", 3, 4], }`, () => {
    assert.equal(eqObjects(cd, cd2), false)
  })

  it(`should return false for {4: 2, 3:4} vs {1:2, 3:4, 5:6}`, () => {
    assert.equal(eqObjects(a, eb), false)
  })

  it(`should return false for {4: 2, 3:4} vs {3: 4, 1:2}`, () => {
    assert.equal(eqObjects(a, b), false)
  })

  it(`should return true for {y: "1", x: [1, "3"]} vs {x: [1, "3"], y: "1"}`, () => {
    assert.equal(eqObjects(test1, test2), true)
  })

  it(`should return false for {y: "1", x: [1, "3"]} vs {y: "1", x:[1, "3", "e"] }`, () => {
    assert.equal(eqObjects(test1, test3), false)
  })

})
