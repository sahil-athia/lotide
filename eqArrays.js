const eqArrays = function(array1, array2) {
  let arrayMatch = false;
  if (array1.length !== array2.length) {
    return arrayMatch;
  } 
  if (array1.length === 0 && array2.length === 0) {
    arrayMatch = true;
    return arrayMatch;
  } 
  //ADD nested array test
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
  return arrayMatch;
};

module.exports = eqArrays
