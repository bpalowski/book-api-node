const express = require('express');
const router = express.Router();
const axios = require('axios');
const books = require('../../db/books.json')
const booksSet = require('../../db/serverdb');
const { v4: uuidv4 } = require('uuid');

const myModule = require('../../handlers/dblogic');

const LocalStorage = require('node-localstorage').LocalStorage;
const localStorage = new LocalStorage('./scratch');

//All books
router.get('/', (req, res) => {

  let arr = [];
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    console.log(JSON.parse(localStorage.getItem(key)).author)
    arr.push(JSON.parse(localStorage.getItem(key)))
  }
  return res.json(arr)
})

// One book by Id
router.get('/:id', (req, res) => {
  let bookId = req.params.id;
  let booksArr = localStorage.getItem(bookId)
  let obj = JSON.parse(booksArr)
  return res.send(obj)
})

//edit
router.put('/:id', (req, res) => {
  let bookId = req.params.id;
  if (!req.body.id) {
    return res.send("Please include Id")
  } else {
    localStorage.setItem(bookId, JSON.stringify(req.body))
    res.send(req.body)
  }
})


// add book
router.post('/', (req, res) => {
  let bookId = uuidv4();
  let title = req.body.title;

  let obj = {
    id: bookId,
    author: req.body.author,
    country: req.body.country,

    imageLink: req.body.imageLink,
    language: req.body.language,
    link: req.body.link,

    pages: req.body.pages,
    title: req.body.title,
    year: req.body.year,
  }


  if (!title) {
    return res.send("Please include title")
  }
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    if (title === JSON.parse(localStorage.getItem(key)).title) {
      return res.send("Title taken")
    }
  }
  localStorage.setItem(bookId, JSON.stringify(obj))
  res.send(localStorage.getItem(bookId))
})


//Delete By id
router.delete('/:id', (req, res) => {
  let bookId = req.params.id;
  localStorage.removeItem(bookId)
  res.send("deleted")
})


module.exports = router;