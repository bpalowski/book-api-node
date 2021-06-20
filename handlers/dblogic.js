exports.getBook = function (bookarray, item) {
  let booksArr = bookarray.books
  for (let i in booksArr) {
    if (booksArr[i].title === item) {
      return console.log(booksArr[i])
    }
    return console.log("not available ")
  }
}





