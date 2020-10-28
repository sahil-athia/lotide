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

const eqObjects = function(object1, object2) {
  let final = false;
  // create a variable to store and change the outcome
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // if the number of keys are the same, proceed, else return false
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        final = eqArrays(object1[key], object2[key]);
        //check to see if the key-values are arrays and pass to eqArrays
      } else if (object1[key] === object2[key]) {
        final = true;
        // if the key-values are not arrays but still the same, pass true to the outcome
      } else {
        return false;
        // if the above conditions do not pass, return false
      }
    }
    return final;
    // return the outcome at the end of the conditionals
  } else {
    return false;
  }
};


// TESTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// const abc = { a: "1", b: "2", c: "3" };
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// const cd2 = { c: "1", d: ["2", 3, 4], };
// const a = {4: 2, 3:4};
// const b = {3: 4, 1:2};
// const test1 = {y: "1", x: [1, "3"]};
// const test2 = {x: [1, "3"], y: "1"};
// const test3 = {y: "1", x:[1, "3", "e"] };
// const eb = {1:2, 3:4, 5:6};

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(a, eb), false);
// assertEqual(eqObjects(a, b), false);
// assertEqual(eqObjects(test1, test2), true);
// assertEqual(eqObjects(test1, test3), false);