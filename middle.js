const middle = function(array) {
  let middleArray = [];
  let middleIndex = Math.floor(array.length / 2)
  // store the middle index in a variable
  if (array.length > 2) {
    // arrays of less than 3 dont have a middle
    if (array.length % 2 === 0) {
      middleArray.push(array[middleIndex - 1]);
      // the even middle index is the second of the 2 middles
      middleArray.push(array[middleIndex]);
    } else {
      middleArray.push(array[middleIndex]);
    }
  } else {
    return middleArray;
  }
  return middleArray;
};

module.exports = middle;

