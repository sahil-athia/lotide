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

const letterPositions = function(sentance) {
  const results = {};
  // object to store the indexes

  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") {
      // ignore spaces
      if (results[sentance[i]]) {
        results[sentance[i]].push(i);
        //push the index of letters that are already in the object
      } else {
        results[sentance[i]] = [];
        //create an array for letters not in the object
        results[sentance[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;

// console.log(letterPositions("hello"))
// console.log(letterPositions("lighthouse in the house"))
// assertArraysEqual(letterPositions("hello").e, [1])
// assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18])