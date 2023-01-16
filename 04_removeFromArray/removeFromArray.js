const removeFromArray = function (inputArray) {
  let changedArray = inputArray;
  let elementLocation = 0;
  for (let i = 1; i < arguments.length; i++) {
    if (changedArray.includes(arguments[i])) {
      elementLocation = changedArray.indexOf(arguments[i]);
      changedArray.splice(elementLocation, 1);
    } 
  }
  return(changedArray);
};

// Do not edit below this line
module.exports = removeFromArray;