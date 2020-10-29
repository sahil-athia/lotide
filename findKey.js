const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    } 
  }
};

console.log(findKey({
  "one": 1 ,
  "two": 2,
  "three": 3,
  "four?": 2,
  "five": 5,
  "six": 6
}, x => x === 0))

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3))

const result = findKey({
  "one": 1 ,
  "two": 2,
  "three": 3,
  "four?": 2,
  "five": 5,
  "six": 6
}, x => x === 2)

assertEqual(result, 'four?')