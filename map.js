const eqArrays = function(array1, array2) {
  let arrayMatch = false;
  if (array1.length === array2.length) {
    if (array1.length === 0 && array2.length === 0) {
      arrayMatch = true;
      return arrayMatch;
    } 
    for (let i = 0; i < array1.length; i++) {
    //iterate through array
      if (array1[i] === array2[i]) {
        //strict equals operator
        arrayMatch = true;
      } else {
        arrayMatch = false;
        return arrayMatch;
        //return false at first mismatch
      }
    }
  } else {
    return arrayMatch;
    //return false if array lengths are different
  }
  return arrayMatch;
};

const assertArraysEqual = function(actual, expected) {
  let outcome = eqArrays(actual, expected);
  if (outcome === true) {
    console.log(`✅✅✅ Assertation Passed: ${(actual)} is equal to ${(expected)}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${(actual)} is not equal ${(expected)}`);
  }
};

const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}

// TESTS
// const words1 = ["1an", "2oda", "3up", "4ight", "5aper"];
// const words2 = ["aan", "foda", "kup", "pight", "uaper"];
// const words3 = ["ban", "goda", "lup", "qight", "vaper"];
// const words4 = ["can", "hoda", "mup", "right", "waper"];
// const words5 = ["dan", "ioda", "nup", "sight", "xaper"];
// const words6 = ["ean", "joda", "oup", "tight", "yaper"];

// assertArraysEqual(map(words1, word => word[0]), ["1", 2, "3", "4", "5"])
// assertArraysEqual(map(words2, word => word[0]), ["a", "f", "k", "p", "u"])
// assertArraysEqual(map(words3, word => word[0]), ["b", "f", "l", "q", "v"])
// assertArraysEqual(map(words4, word => word[0]), ["c", "h", "m", "r", "w"])
// assertArraysEqual(map(words5, word => word[0]), ["d", "i", "n", "s", "x"])
// assertArraysEqual(map(words6, word => word[0]), ["e", "j", "o", "t", "y"])