const assert = require("chai").assert;
const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([], []);
assertArraysEqual([1, 2, 3], [2, "3", 2]);
assertArraysEqual([1, 2, "3three", 2], [1, 2, "3three", 2]);
assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]);
assertArraysEqual([[2, 3], [4]], [[2, 3], [4, 5]]);
assertArraysEqual([[2, 3], [4]], [[2, 3], 4]);