const getTheTitles = function(books) {
  booksArray = [];
  for (i = 0; i < 2; i++) {
    booksArray.push(books[i].title)
  };
  return booksArray;
};

// Do not edit below this line
module.exports = getTheTitles;
