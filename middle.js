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

const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2)
  // store the middle index in a variable
  if (array.length > 2) {
    // arrays of less than 3 dont have a middle
    if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1]);
      // the even middle index is the second of the 2 middles
      middleArray.push(array[middleIndex]);
    } else {
      middleArray.push(array[middleIndex]);
    }
  } else {
    return middleArray;
  }
  return middleArray;
};


// TESTS
// console.log(middle([1]))
// console.log(middle([1, 2]))
// console.log(middle([1, 2, 3]))
// console.log(middle([1, 2, 3, 4, 5]))
// console.log(middle([1, 2, 3, 4]))
// console.log(middle([1, 2, 3, 4, 5, 6,]))
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
