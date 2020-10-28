const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let lettersObj = {};

  for (const letter of letters) {
    if (letter !== " ") {
      if (lettersObj[letter]) {
        lettersObj[letter] += 1;
      } else {
        lettersObj[letter] = 1;
      }
    }
  }
  return lettersObj;
};

console.log(countLetters("hello   hello"));