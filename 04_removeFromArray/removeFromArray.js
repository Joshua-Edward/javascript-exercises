const removeFromArray = function (inputArray) {
  let changedArray = inputArray;
  let elementLocation = 0;
  for (let i = 1; i < arguments.length; i++) {
    if (changedArray.includes(arguments[i])) {
      elementLocation = changedArray.findIndex(() => arguments[i]);
      console.log(`test ${arguments[i]}`);
      changedArray = changedArray.slice(elementLocation, elementLocation + 1);
    } else {
      changedArray = changedArray;
    } 
  }
  console.log(changedArray);
  return(changedArray);
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;