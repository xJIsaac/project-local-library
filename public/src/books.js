function findAuthorById(authors, id) {
  return authors.find(author => author.id == id)
}

function findBookById(books, id) {
  return books.find(book => book.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  const loanedOut = []
  const returned = []
  books.forEach( book => {
    book.borrows[0].returned == false ? loanedOut.push(book) : returned.push(book)
  })
  return [loanedOut, returned]
}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
