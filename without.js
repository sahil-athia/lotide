const eqArrays = function(array1, array2) {
  let trueTally = false;
  if (!array1.length && !array2.length) {
    return true;
    // return true for 2 empty arrays
  } else if (array1.length !== array2.length) {
    return false;
    // return false for arrays of different length
  }
  for (let i of array1) {
    let j = array2[array1.indexOf(i)];
    if ((Array.isArray(i) && !Array.isArray(j)) || (!Array.isArray(i) && Array.isArray(j))) {
      // if one element is an array but one is not, return false
      return false;
    }
    if (Array.isArray(i) && Array.isArray(j)) {
      if (eqArrays(i, j)) {
        trueTally = true;
        //add true if assertion for the two arrays are true
      } else if (i !== j) {
        return false;
      }
    }
    if (array1[i] === array2[j]) {
      // strict equals to compare elements
      trueTally = true;
    } else {
      return false;
      // return false at first instance of mismatch
    }
  }
  return trueTally;
};

const assertArraysEqual = function(actual, expected) {
  let outcome = eqArrays(actual, expected);
  if (outcome === true) {
    console.log(`✅✅✅ Assertation Passed: ${(actual)} is equal to ${(expected)}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${(actual)} is not equal ${(expected)}`);
  }
};

const without = function(source, remove) {
  let final = source;
  //set a seperate array as source to not change original
  for (let i = 0; i < remove.length; i++) {
    //iterate through the values we want to remove
    final = final.filter(element => element !== remove[i]);
    //filter the values we want to remove out of the copied source array
  }
  console.log(final);
  //log the final array
};

module.exports = without;

// TESTs
// without([1, 2, 3, 1, 1], [3, 2])
// without([1, 2, 3, 1, 1], [1, 2])
// without([1, 2, 3, 1, 1], [2, 2])
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
