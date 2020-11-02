const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require("./findKeyByValue");
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const assertObjectsEqual = require("./assertObjectsEqual");
const assertArraysEqual = require("./assertArraysEqual");
const assertEqual = require("./assertEqual");
const eqObjects = require("./eqObjects");
const eqArrays = require("./eqArrays");

module.exports = {
  head,
  tail,
  middle,
  findKey,
  findKeyByValue,
  flatten,
  map,
  takeUntil,
  without,
  countLetters,
  countOnly,
  letterPositions,
  assertObjectsEqual,
  assertArraysEqual,
  assertEqual,
  eqObjects,
  eqArrays
};