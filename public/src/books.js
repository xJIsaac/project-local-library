const {
  findAccountById,
} = require("./accounts.js");

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

function getBorrowersForBook(book, accounts) {
  return book.borrows.map( borrowRecord => {
    const {
      picture,
      age,
      name,
      company,
      email,
      registered,
    } = findAccountById(accounts, borrowRecord.id)
    return {
      id: borrowRecord.id,
      returned: borrowRecord.returned,
      picture: picture,
      age: age,
      name: name,
      company: company,
      email: email,
      registered: registered,
    }
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
