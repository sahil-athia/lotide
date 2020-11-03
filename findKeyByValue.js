const findKeyByValue = function(object, value) {
  for (let i in object) {
    // loop through the key names
    if (object[i] === value) {
      return i;
      //return the matching key
    }
  }
  return undefined;
  // in no matches, retunr undefined
};

module.exports = findKeyByValue;
