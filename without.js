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

// TESTs
// without([1, 2, 3, 1, 1], [3, 2])
// without([1, 2, 3, 1, 1], [1, 2])
// without([1, 2, 3, 1, 1], [2, 2])
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
