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

const without = function(source, remove) {
  let final = source;
  //set a seperate array was source to not change original
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
