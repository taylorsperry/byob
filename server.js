//CONFIGURATION

const express = require('express')
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);


const app = express()

app.use(express.json())
app.set('port', process.env.PORT || 3000) 
app.listen(app.get('port'), () => console.log(`Listening!`))

//GET

//get all authors
app.get('/api/v1/authors', (req, res) => {
  database('authors').select()
    .then((authors) => {
      if(authors.length) {
        res.status(200).json(authors)
      } else {
        res.status(404).json({ error: 'No authors found' })
      }
    })
    .catch((error) => {
      res.status(500).json(`Something went wrong with the server: ${error}`)
    })
})

//get all books
app.get('/api/v1/books', (req, res) => {
  database('books').select()
    .then((books) => {
      if(books.length) {
        res.status(200).json(books)
      } else {
        res.status(404).json({ error: 'No books found' })
      }
    })
    .catch((error) => {
      res.status(500).json(`Something went wrong with the server: ${error}`)
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
    .catch(error => {
      res.status(500).json(`Something went wrong with the server: ${error}`)
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
          error: `Could not find any books with an author_id of ${req.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json(`Something went wrong with the server: ${error}`)
    })
})

//POST

//post an author
app.post('/api/v1/authors', (req, res) => {
  const author = req.body
  for (let requiredParam of ['name', 'bio']) {
    if(!author[requiredParam]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String>, bio: <String> }. You're missing the ${requiredParam} property.`})
    }
  }
  database('authors').insert(author, 'id')
    .then(author => {
      res.status(201).json({ id: author[0] })
    })
    .catch(error => {
      res.status(500).json({error})
    })
})

//post a book
app.post('/api/v1/books', (req, res) => {
  const book = req.body
  for (let requiredParam of ['title', 'pub', 'author_id']) {
    if(!book[requiredParam]) {
      return res
        .status(422)
        .send({ error: `Expected format: { title: <String>, pub: <Integer>, author_id: <Integer> }. You're missing the ${requiredParam} property.`})
    }
  }
  database('books').insert(book, 'id')
    .then(books => {
      res.status(201).json({ id: books[0] })
    })
    .catch(error => {
      res.status(500).json(`Something went wrong with the server: ${error}`)
    })
})

//DELETE

//delete a book 
app.delete('/api/v1/books/:id', (req, res) => {
  database('books').where('id', req.params.id).del()
    .then(result => {
      if (result > 0) {
        res.status(200).json(`Deleted title '${req.body.title}' with id ${req.params.id}`)
      } else {
        res.status(404).json({
          error: `Could not find book with id ${req.params.id}`
        })
      }
    })
    .catch(error => {
      res.status(500).json(`Something went wrong with the server: ${error}`)
    })
})

