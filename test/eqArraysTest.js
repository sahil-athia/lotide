const assert = require("chai").assert;
const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

assertEqual(eqArrays([], []), true);
console.log(eqArrays([], [])); // true
console.log(eqArrays([], [1])); // false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // true
console.log(eqArrays(["1", "2", 3], ["1", "2", 3])); // true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // false