exports.getBook = function (bookarray, item) {
  // console.log(bookarray.books)
  console.log(item)
  let booksArr = bookarray.books
  for (let i in booksArr) {
    // console.log(booksArr[i].title)
    if (booksArr[i].title === item) {
      return console.log(booksArr[i])
    }
    return console.log("no ")
  }

}





