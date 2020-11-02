const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let i in object) {
    // loop through the key names
    if (object[i] === value) {
      return i;
      //return the matching key
    }
  }
  return undefined;
  // in no matches, retunr undefined
};

module.exports = findKeyByValue;

// Tests
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);