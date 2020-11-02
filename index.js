const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const findKey = require('./findKey');
const findKeyByValue = require("./findKeyByValue")
const flatten = require('./flatten');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const assertObjectsEqual = require("./assertObjectsEqual")
const assertArraysEqual = require("./assertArraysEqual")
const assertEqual = require("./assertEqual")
const eqObjects = require("./eqObjects")
const eqArrays = require("./eqArrays");

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  map: map,
  takeUntil: takeUntil,
  without: without,
  countLetters: countLetters,
  countOnly: countOnly,
  letterPositions: letterPositions,
  assertObjectsEqual: assertObjectsEqual,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  eqObjects: eqObjects,
  eqArrays: eqArrays
};