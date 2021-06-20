let express = require('express');
const axios = require('axios');
const books = require('../../db/books.json')
const booksSet = require('../../db/serverdb');
let router = express.Router();

const myModule = require('../../handlers/dblogic');

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


router.get('/', async (req, res) => {
  let booksArr = localStorage.getItem("booksArr")
  let obj = JSON.parse(booksArr)
  await myModule.getBook(obj.books)
  res.send(obj.books)
})


router.delete('/book/:title', (req, res) => {
  let booksArr = localStorage.getItem("booksArr")
  let obj = JSON.parse(booksArr)

  // let title = req.params

  // console.log(title)

  // myModule.getBook(obj, title)
  // console.log(test)
  // console.log("hellos")

  return res.send("sd")

  // console.log("24", test)
})


module.exports = router;