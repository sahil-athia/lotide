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

const flatten = function(array) {
  let finalArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        finalArray.push(element[i]);
      }
    } else {
      finalArray.push(element);
    }
  });
  console.log(finalArray);
};

module.exports = flatten;
//flatten([1, 2, [3, 4], [5], [6]])