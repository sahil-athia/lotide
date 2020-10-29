const eqObjects = function(object1, object2) {
  let final = false;
  // create a variable to store and change the outcome
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // if the number of keys are the same, proceed, else return false
    for (let key of Object.keys(object1)) {
      if (object1[key] === object2[key]) {
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

const assertFunctionsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  //ensure that the actual object is printed
  let outcome = eqObjects(actual, expected);
  if (outcome === true) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} is equal to ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${inspect(actual)} is not equal ${inspect(expected)}`);
  }
};

//assertFunctionsEqual({1: "a", 2: "b"}, {1: "a", 2: "b"})