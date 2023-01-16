const sumAll = function(var1, var2) {
  let sum = 0;
  
  if (var1 < 0 || var2 < 0) {
    sum = 'ERROR';
  } else if (typeof(var1) != "number" || typeof(var2) != "number") {
    sum = 'ERROR';
  } else if (var1 <= var2) {
    for (let i = var1; i <= var2; i++)
    sum += i;
  } else if (var1 > var2) {
    for (let i = var1; i >= var2; i--)
    sum += i;
  } 
  return(sum)
};

// Do not edit below this line
module.exports = sumAll;