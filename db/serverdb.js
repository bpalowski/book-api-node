const bookArray = require('./books.json')
const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


exports.setBooks = (function () {
  localStorage.setItem('booksArr', JSON.stringify(bookArray))
})


