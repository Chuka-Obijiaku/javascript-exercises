const sumAll = function(low, high) {
  if (!Number.isInteger(low) || !Number.isInteger(high)) {
    return "ERROR";
  } 
  let total = 0;
  if (low > high) {
    let temp = low;
    low = high;
    high = temp;
  }
  if (low < 0 || high < 0) {
    return 'ERROR'
  }
  for (let i = low; i <= high; i++) {
    total += i;
  }

  return total;

};

// Do not edit below this line
module.exports = sumAll;
