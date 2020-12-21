function findAccountById(accounts, id) {
  return accounts.find( acct => acct.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acctA, acctB) => 
    acctA.name.last.toLowerCase() > acctB.name.last.toLowerCase() ? 1 : -1
  )
}

function numberOfBorrows({ id }, books) {
  return books.reduce((acc, book) => {
    return acc += book.borrows.filter(borrow => borrow.id == id).length
  }, 0)
}

function getBooksPossessedByAccount({id}, books, authors) {
  return books.filter( book => {
    return book.borrows.some(borrowRecord => {
      if (borrowRecord.id == id && borrowRecord.returned == false) {
        book.author = authors.find( author => author.id == book.authorId)
        return true
      }
    })
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};