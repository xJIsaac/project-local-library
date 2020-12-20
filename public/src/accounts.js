function findAccountById(accounts, id) {
  return accounts.find( acct => acct.id == id)
}

function sortAccountsByLastName(accounts) {}

function numberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
