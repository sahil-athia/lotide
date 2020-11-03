const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue")

describe("#findKeuByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  it ("should return true for the expanse and sci_fi", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  })
  it ("should return undefined for that 80's show and undefined", () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
})

