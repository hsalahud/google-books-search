const { Saved, Search } = require('../models')
const axios = require('axios')
// const key = require('../keys.js')
// console.log(key)
// require('dotenv').config()
const { apiKey } = require('../keys.js')


module.exports = app => {

  // const API_key = process.env.GOOGLE_BOOKS_API_KEY
  // console.log(API_key)
  //Retrieve books from google books api
 

  app.post('/search/:book', (req, res) => {
    Search.deleteMany({}, e => {
      if (e) throw e
    })
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.params.book}&country=US&key=${apiKey}`)
      .then(({ data: {items} }) => {
        let booksArr = []
        items.forEach(({volumeInfo: {title, authors, description, imageLinks, previewLink}}) => {
            const book = {
              title ,
              authors,
              description,
              image: imageLinks ? imageLinks.thumbnail : null,
              link: previewLink,
            }
            booksArr.push(book)
        })
        // console.log(booksArr)
        Search.insertMany(booksArr, e => e ? console.log(e) : res.sendStatus(200))
      })
      .catch(e => console.log(e))
  })

  //view Searched book
  app.get('/search', (req, res) => {
    Search.find({})
      .then(books => {
        res.json(books)
      })
      .catch(e => console.log(e))
  })

  // GET all books that were saved
  app.get('/savedBooks', (req, res) => {
    Saved.find({})
      .then(books => {
        res.json(books)
      })
      .catch(e => console.log(e))
  })

  // POST a book into saved
  app.post('/savedBooks', (req, res) => {
    Saved.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })


  //DELETE a book
  app.delete('/savedBooks/:id', (req, res) => {
    Saved.findByIdAndDelete(req.params.id)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

}