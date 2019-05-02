//CONFIGURATION

const express = require('express')
//express is a small framework built on top of the web server functionality provided by Node.js. This way the developer is only responsible for the 'middleware' part of the request flow. 

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
//This allows the express server to interact with the seeded knex database. If the production environment is not declared, its default environment is 'development'. Based on the environment, we're requiring the database configuration from knexfile.js so that the express app can connect to it. 


const app = express()
//Assigns the express app to the variable app. 
const port = 3000
//Asigns the number 3000 to the variable port.

app.use(express.json())
//Allows app to parse the request body to json by default. 
app.listen(port, () => console.log(`Listening on port ${port}!`))
//When the server is running, console log reports that its running on the port declared above. 

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
//Calls the GET http method with the URL as the first param and a callback as the second param to get an array of all the authors from the database. It calls the select method on the knex database object named 'authors' and if the database has authors, it sends a response with a 200 status and all of the authors as json objects. If the database does not have any authors, it sends a response with a 404 status and an error message 'No authors found'. The catch sends a response with a 500 status and a message that something has gone wrong with the server and the error itself. 

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
//Calls the GET http method with the URL as the first param and a callback as the second param to get an array of all the books from the database. It calls the select method on the knex database object named 'books' and if the database has books, it sends a response with a 200 status and all of the books as json objects. If the database does not have any books, it sends a response with a 404 status and an error message 'No books found'. The catch sends a response with a 500 status and a message that something has gone wrong with the server and the interpolated error. 

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
//Calls the GET http method with the URL as the first param and a callback as the second param. It calls the select method on the knex database object named 'authors' and a where clause for the row with an author id matches the id passed in the request parameter. If a matching author is found, it sends a response with a 200 status and a json object with the found author. If a matching author is not found, it sends a response with a 404 status and a json object with an error message that interpolates the request params. The catch sends a response with a 500 status and a message that something has gone wrong with the server and the interpolated error.

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
//Calls the GET http method with the URL as the first param and a callback as the second param. It calls the select method on the knex database object named 'books' and a where clause for any rows with an author_id (the foreign key) that matches the id passed in the request parameter. If any matching books are found, it sends a response with a 200 status and an array of json objects with all of the found books. If no matching books are found, it sends an error message that interpolates the passed id. The catch sends a response with a 500 status and a message that something has gone wrong with the server and ther interpolated error. 

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
//Calls the POST http method with the URL as the first param and a callback as the second param. It assigns the request body to the variable 'author' and declares 'name' and 'bio' as requiredParams. If either of the requiredParams is missing from the body, it sends a response with a 422 status and an error message telling the user which parameter was missing from the request. If more than one parameter is missing from the request, it will only send the first one that's missing. It calls the insert method on the knex database object called 'authors' and passes through the request body and the id sends a response with a 201 status and a json object of the newly created id. The value here is author[0] because the response is an array, and because we're only posting one author, the appropriate author is always going to be the author at index 0. The catch sends a response with status 500 and a json object with the caught error. 

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
//Calls the POST http method with the URL as the first param and a callback as the second param. It assigns the request body to the variable 'book' and declares 'title', 'pub', and 'author_id' as requiredParams. If any of the requiredParams is missing from the body, it sends a response with a 422 status and an error message telling the user which parameter was missing from the request. If more than one parameter is missing from the request, it will only send the first one that's missing. It calls the insert method on the knex database object called 'books' and passes through the request body and the id sends a response with a 201 status and a json object of the newly created id. The value here is book[0] because the response is an array, and because we're only posting one book, the appropriate book is always going to be the book at index 0. The catch sends a response with a status 500 and a json object with the caught error. There is not a sad path for an author_id (foreign key) that does not match an id in the author database because that would probably be handled on the front end--a button, for example, that would allow the option to post a book associated with a particular author. 

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
//Calls the DELETE http method with the URL as the first param and a callback as the second param. It calls the del() method on the knex database object called 'books' and a 'where' clause to find the row with an id that matches the id passed through the request parameters. The result is an integer reflecting the number of rows that have been deleted, which for the happy path will always be 1 (each id is unique, so only 1 book can be deleted at a time). If the result is greater than 0, it sends a response with a 200 status and the message that the title with the request body title and the id of the request params id has been deleted. If the id in the request params does not match any of the ids in the books database, the result will be 0 (0 rows deleted) and it will send a response with a 404 status and a json object with the message that it could not find a book with an id that matches that passed id. The catch sends a response with a 500 status and a message that something has gone wrong with the server and interpolates the caught error. 
