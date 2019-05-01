//CONFIGURATION

const express = require('express')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


const app = express()
const port = 3000

app.use(express.json())
app.listen(port, () => console.log(`Listening on port ${port}!`))

//GET

//get all authors
app.get('/api/v1/authors', (req, res) => {
  database('authors').select()
    .then((authors) => {
      res.status(200).json(authors)
    })
    .catch((error) => {
      res.status(500).json({error})
    })
})

//get all books
app.get('/api/v1/books', (req, res) => {
  database('books').select()
    .then((books) => {
      res.status(200).json(books)
    })
    .catch((error) => {
      res.status(500).json({error})
    })
})

//get author by id
app.get('/api/v1/authors/:id', (req, res) => {
  database('authors').where('id', req.params.id).select()
    .then(authors => {
      if(authors.length) {
        res.status(200).json(authors)
      } else {
        res.status(404).json({
          error: `Could not find author with id ${req.params.id}`
        });
      }
    })
})

//get associated books by author id
app.get('/api/v1/authors/:id/books', (req, res) => {
  database('books').where('author_id', req.params.id).select()
    .then(books => {
      if(books.length) {
        res.status(200).json(books)
      } else {
        res.status(404).json({
          error: `Could not find book with id ${req.params.id}`
        })
      }
    })
})

