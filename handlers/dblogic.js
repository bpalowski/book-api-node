exports.getBook = function (bookarray, id) {
  let booksArr = bookarray.books
  for (let i in booksArr) {
    if (booksArr[i].id === id) {
      return booksArr[i]
    }
    return console.log("not available ")
  }
}





