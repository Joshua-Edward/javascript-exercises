const reverseString = function(inputString) {
  let reversedString = '';
  if (inputString.length === 0) {
    reversedString = '';
  } else {
      for (let i = 1; i < (inputString.length); i++) {
        reversedString += inputString.charAt(inputString.length - i);
      }
  }
  return(reversedString);
};

// Do not edit below this line
module.exports = reverseString;
