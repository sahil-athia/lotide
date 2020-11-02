const tail = function(array) {
  let tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
};

module.exports = tail;
