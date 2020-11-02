# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sahil-athia/lotide`

**Require it:**

`const _ = require('@sahil-athia/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
  `function1(tail)`: retuns all but the first element of an array
  `function2(middle)`: returns the middle elements of an array
  `function3(findKey)`: returns the key in an object given a callback function
  `function4(findKeyByValue)`: returns the key that matches a value
  `function5(flatten)`: creates one array given a nasted array
  `function6(map)`: creates a new array based on a callback function 
  `function7(takeUntil)`: creates a new array until a certain stop condition
  `function8(without)`: takes an array and removed all of the elements that arent wanted
  `function9(countLetters)`: creates an object that keeps track of each letter in a string
  `function10(countOnly)`: counts the number of values in an object and stores that number in a new object
  `function11(letterPositions)`: returns the indexes of all occurances of a letter in a string
  `function12(assertObjectsEqual)`: assertion and message print of 2 objects
  `function13(assertArraysEqual)`: assertion and message print of 2 arrays
  `function14(assertEqual)`: asserts 2 arguments
  `function15(eqObjects)`: assertion of 2 objects
  `function16(eqArray)`: assertion of 2 arrays
  `function17(head)`: returns only the first element of an array
