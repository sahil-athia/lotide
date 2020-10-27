const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  let arrayMatch = false;
  if (array1.length === array2.length) {
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

// TESTS
// assertEqual(eqArrays(["hi", 2, "3"], ["hi", 2, "03"]), true);
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));