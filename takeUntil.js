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

const takeUntil = function(array, callback) {
  let result = [];
  let i = 0;
  while (!callback(array[i])) {
    // only pass when the callback is not truthy
    result.push(array[i]);
    // add the correct element to the result array
    i++;
    // incrementation counter
  }
  return result;
  // return the completed array
};


module.exports =  takeUntil;
// TESTS
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

// const results1 = takeUntil(data1, x => x < 0);
// const results2 = takeUntil(data2, x => x === ',');
// const results3 = takeUntil(data1, x => x > 3);
// const results4 = takeUntil(data1, x => x > 6);
// const results5 = takeUntil(data1, x => x > 4);
// const results6 = takeUntil(data2, x => x === 'Hollywood');
// const results7 = takeUntil(data2, x => x === 'to');

// console.log(results2);
// console.log(results1);
// console.log(results3);
// console.log(results4);
// console.log(results5);
// console.log(results6);
// console.log(results7);

// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
