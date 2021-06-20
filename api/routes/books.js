let express = require('express');
const axios = require('axios');
const books = require('../../db/books.json')
const booksSet = require('../../db/serverdb');
let router = express.Router();

const myModule = require('../../handlers/dblogic');

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');


router.get('/', (req, res) => {
  let booksArr = localStorage.getItem("booksArr")
  let obj = JSON.parse(booksArr)
  res.send(obj.books)
})


router.delete('/book/:title', (req, res) => {

})


module.exports = router;