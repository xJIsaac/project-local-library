function findAccountById(accounts, id) {
  return accounts.find( acct => acct.id == id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((acctA, acctB) => 
    acctA.name.last.toLowerCase() > acctB.name.last.toLowerCase() ? 1 : -1
  )
}

function numberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
