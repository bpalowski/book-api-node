const express = require('express')
const app = express()

const port = 3000

const bookRouter = require('./api/routes/books.js')
const books = require('./db/serverdb');

app.use('/books', bookRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  books.setBooks()
})