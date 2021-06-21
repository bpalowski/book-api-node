const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = 8080


const bookRouter = require('./api/routes/books.js')
const books = require('./db/serverdb');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/books', bookRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  books.setBooks()
})