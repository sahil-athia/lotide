const eqArrays = require("./eqArrays")

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

