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

const letterPositions = function(sentance) {
  const results = {};
  // object to store the indexes

  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") {
      // ignore spaces
      if (results[sentance[i]]){
        results[sentance[i]].push(i)
        //push the index of letters that are already in the object
      } else {
        results[sentance[i]] = []
        //create an array for letters not in the object
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