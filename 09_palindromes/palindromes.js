const palindromes = function (originalString) {
  const condensedString = originalString.replace(/[^a-xA-Z]/g, '').toLowerCase();
  const stringLength = condensedString.length;
  let testResults;
  for (i = 0; i < stringLength/2; i++) {
    if (condensedString[i] === condensedString[stringLength-(i+1)]) {
    testResults = true;
    } else {
      testResults = false;
    };
  };
  return testResults;
};


/* Answer from solution sheet using array methods
const palindromes = function (string) {
  const processedString = string.toLowerCase().replace(/[^a-z]/g, "");
  return processedString.split("").reverse().join("") == processedString;
};
*/

// Do not edit below this line
module.exports = palindromes;
