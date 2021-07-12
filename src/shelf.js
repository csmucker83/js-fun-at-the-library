function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (title === shelf[i].title) {
      shelf.splice(i ,1);
    }
  }
}

function listTitles(shelf) {
  var newArray = [];
  for (i = 0; i < shelf.length; i++) {
    newArray.push(shelf[i].title)
  }
  return newArray.join(", ")
}

function searchShelf(shelf, title) {
  var onShelf = false;
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      onShelf = true;
    }
  }
  return onShelf;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
