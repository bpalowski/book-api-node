const bookArray = require('./books.json')
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

exports.setBooks = function () {
  let books = bookArray.books
  if (localStorage.length <= 0) {
    for (let i in books) {
      localStorage.setItem(books[i].id, JSON.stringify(books[i]))
    }

  }
}


