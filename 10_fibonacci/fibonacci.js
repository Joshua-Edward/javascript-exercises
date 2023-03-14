const fibonacci = function(fibNumber) {
  parsedFib = parseInt(fibNumber, 10);
  let fibArray = [1, 1];
  if ((typeof parsedFib) !== "number") {
    return "OOOPS";
  } else if (parsedFib <= 0) {
    return "OOPS"
  } else if (parsedFib === 1 || parsedFib === 2) {
    return 1;
  } else {
    for (i = 2; i < parsedFib; i++) {
      fibArray.push(fibArray[i-1]+fibArray[i-2]);
    };
  };
  return fibArray.pop();
};

// Do not edit below this line
module.exports = fibonacci;
