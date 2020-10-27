const assertArraysEqual = function(array1, array2) {
  let arrayMatch = `❌❌❌ Assertation Failed: ${array1} !== ${array2}`;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
    //iterate through array
      if (array1[i] === array2[i]) {
        //strict equals operator
        arrayMatch = `✅✅✅ Assertation Passed: ${array1} === ${array2}`;
      } else {
        arrayMatch = `❌❌❌ Assertation Failed: ${array1} !== ${array2}`;
        return console.log(arrayMatch);
        //return fail at first mismatch
      }
    }
  } else {
    return console.log(arrayMatch);
    //return fail if array lengths are different
  }
  return console.log(arrayMatch);
};

// TESTS
// assertArraysEqual([1, 2, 3], [1, 2, "3", 2]);
// assertArraysEqual([1, 2, 3], [2, "3", 2]);
// assertArraysEqual([1, 2, 3], [1, 2, "3"]);
// assertArraysEqual([1, 2, "3three", 2], [1, 2, "3three", 2]);