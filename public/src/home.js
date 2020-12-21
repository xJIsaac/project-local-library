function totalBooksCount(books) {
  return books.length
}

function totalAccountsCount(accounts) {
  return accounts.length
}

function booksBorrowedCount(books) {
  return books.filter(book => book.borrows[0].returned == false).length
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    const thisGenre = {name: book.genre, count: 1}
    const existingGenre = acc.find( genre => genre.name == thisGenre.name)
    existingGenre ? existingGenre.count++ : acc.push(thisGenre)
    return acc;
  }, [])
  return result.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1).slice(0, 5)
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
