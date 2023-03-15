const findTheOldest = (function(peopleArray) {
  peopleArray.sort((firstPerson, secondPerson) => {
    const yearNow = new Date().getFullYear();
    let lastGuy = 0;
    if ("yearOfDeath" in firstPerson) {
      lastGuy = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
    } else {
      lastGuy = yearNow - firstPerson.yearOfBirth;
    };
    let nextGuy = 0;
    if ("yearOfDeath" in secondPerson) {
      nextGuy = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
    } else {
      nextGuy = yearNow - secondPerson.yearOfBirth;
    };
    return lastGuy > nextGuy ? -1 : 1;
  });
  return peopleArray[0];
});

// Do not edit below this line
module.exports = findTheOldest;
