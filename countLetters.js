const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertation Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(letters) {
  let lettersObj = {};
  //  create an object to store the letters that we find

  for (const letter of letters) {
    // loop through each of the letters in out string
    if (letter !== " ") {
    // ignore any blank spaces
      if (lettersObj[letter]) {
        lettersObj[letter] += 1;
        // if the letter exists in our object, add a number
      } else {
        lettersObj[letter] = 1;
        // if the letter does not exit in object, add it 
      }
    }
  }
  return lettersObj;
  // return our object
};

// TEST : 
// console.log(countLetters("hello"));