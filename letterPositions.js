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

const assertArraysEqual = function(array1, array2) {
  let arrayMatch = `❌❌❌ Assertation Failed: ${array1} !== ${array2}`;
  if (array1.length === array2.length) {
    if (array1.length === 0 && array2.length === 0) {
      arrayMatch = `✅✅✅ Assertation Passed: ${array1} === ${array2}`;
      return console.log(arrayMatch);
    }
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

const letterPositions = function(sentance) {
  const results = {};

  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") {
      if (results[sentance[i]]){
        results[sentance[i]].push(i)
      } else {
        results[sentance[i]] = []
        results[sentance[i]].push(i)
      }
    }
  }
  return results;
};
console.log(letterPositions("hello"))
console.log(letterPositions("lighthouse in the house"))
assertArraysEqual(letterPositions("hello").e, [1])
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18])