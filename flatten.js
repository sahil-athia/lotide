const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const flatten = function(array) {
  let finalArray = [];
  array.forEach(element => {
    if (Array.isArray(element)) {
      for (let i = 0; i < element.length; i++) {
        finalArray.push(element[i]);
      }
    } else {
      finalArray.push(element);
    }
  });
  return finalArray;
};

module.exports = flatten;