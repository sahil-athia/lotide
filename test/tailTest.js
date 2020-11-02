const assert = require("chai").assert
const tail = require("../tail");

describe("#tail", () => {
  it("returns array length 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.equal(result.length, 2)
  })

  it("returns ['Lighthouse', 'Labs,] for ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"])
    assert.deepEqual(result, ['Lighthouse', 'Labs'])
  })

})
