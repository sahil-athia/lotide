const countOnly = function(allitems, itemsToCount) {
  const results = {};

  for (const item of allitems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

module.exports = countOnly;

