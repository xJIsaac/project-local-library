function findAccountById(accounts, id) {
  return accounts.find((acct) => acct.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acctA, acctB) => {
    const lastNameA = acctA.name.last.toLowerCase();
    const lastNameB = acctB.name.last.toLowerCase();
    return lastNameA > lastNameB ? 1 : -1;
  });
}

function numberOfBorrows({ id }, books) {
  return books.reduce((acc, book) => {
    const matchingBorrowsCount = book.borrows.filter((borrow) => borrow.id === id).length;
    return acc + matchingBorrowsCount;
  }, 0);
}

function getBooksPossessedByAccount({ id }, books, authors) {
  return books.filter((book) => {
    const lastborrow = book.borrows[0];
    return lastborrow.id === id && lastborrow.returned === false;
  }).map((book) => {
    const thisBook = book;
    thisBook.author = authors.find((author) => author.id === thisBook.authorId);
    return book;
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
