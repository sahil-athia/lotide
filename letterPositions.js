const letterPositions = function(sentance) {
  const results = {};
  // object to store the indexes

  for (let i = 0; i < sentance.length; i++) {
    if (sentance[i] !== " ") {
      // ignore spaces
      if (results[sentance[i]]) {
        results[sentance[i]].push(i);
        //push the index of letters that are already in the object
      } else {
        results[sentance[i]] = [];
        //create an array for letters not in the object
        results[sentance[i]].push(i);
      }
    }
  }
  return results;
};

module.exports = letterPositions;
