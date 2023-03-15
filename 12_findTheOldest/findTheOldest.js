const findTheOldest = (function(peopleArray) {
  peopleArray.sort((firstPerson, secondPerson) => {
    const lastGuy = getAge(firstPerson.yearOfBirth, firstPerson.yearOfDeath);
    const nextGuy = getAge(secondPerson.yearOfBirth, secondPerson.yearOfDeath);
    return lastGuy > nextGuy ? -1 : 1;
  });
  return peopleArray[0];
});

// function findTheOldest (people) {
//   return people.reduce((currOldest, currPerson) => {
//     const currAge = currOldest ? getAge(currOldest.yearOfBirth, currOldest.yearOfDeath) : 0;
//     const compAge = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath);
//     return currAge > compAge ? currOldest : currPerson;
//   });
// };

const getAge = function(birth, death = new Date().getFullYear()) {
  return death-birth;
};
// Do not edit below this line
module.exports = findTheOldest;