function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  return mainCharacter = {
    name: name,
    age: age,
    pronouns: pronouns,
  };
}

function saveReview(review, reviews) {
  if (reviews.includes(review)) {
    return reviews;
  } else {
    return reviews.push(review);
  }
};

function calculatePageCount(bookPageCount) {
  return bookPageCount.length * 20;
}

function writeBook(title, mainCharacter, genre) {
  return book = {
    title: title,
    mainCharacter: mainCharacter,
    pageCount: title.length * 20,
    genre: "fantasy",
  }
}

function editBook(book) {
  book.pageCount = book.pageCount * .75;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
