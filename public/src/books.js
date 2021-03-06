const {
  findAccountById,
} = require('./accounts.js');

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const loanedOut = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);
  return [loanedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrowRecord) => {
    const {
      picture,
      age,
      name,
      company,
      email,
      registered,
    } = findAccountById(accounts, borrowRecord.id);
    return {
      id: borrowRecord.id,
      returned: borrowRecord.returned,
      picture,
      age,
      name,
      company,
      email,
      registered,
    };
  }).slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
