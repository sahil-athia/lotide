const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let final = false;
  // create a variable to store and change the outcome
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // if the number of keys are the same, proceed, else return false
    for (let key of Object.keys(object1)) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        final = eqArrays(object1[key], object2[key]);
        //check to see if the key-values are arrays and pass to eqArrays
      } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
        return eqObjects(object1[key], object2[key]);
        // loop trough nested objects until no longer nested
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
module.exports = eqObjects;

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true)
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }))
// console.log(eqObjects({ a: { y: 0, z: {e:1}}, b: 2 }, { a: {y: 0, z: {e:1}}, b: 2 }))
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