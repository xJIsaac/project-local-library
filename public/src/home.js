function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned == false).length
}
function sortAndGiveTopFive(array) {
  return array.sort((itemA, itemB) => itemA.count < itemB.count ? 1 : -1).slice(0, 5)
}

function getMostCommonGenres(books) {
function getMostPopularBooks(books) {
  const result = books.reduce((acc, book) => {
    const newObj = {name: book["title"], count: book.borrows.length}
    acc.push(newObj)
    return acc;
  }, [])
  return sortAndGiveTopFive(result)
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  totalBooksCount,
  totalAccountsCount,
  booksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
