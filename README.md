express is a small framework built on top of the web server functionality provided by Node.js. This way the developer is only responsible for the 'middleware' part of the request flow.

Declares the environment as development, testing, or production environment. If we don’t know, we’ll assume we’re in development.

Based on the environment, fetch the database configuration from knexfile.js so the express app will be able to connect to it.

// assigns express app to the const app.

// allows app to parse the request body to json by default (for POST requests)

//tells app to listen at port 3000 and console logs that information

//calls the GET http method with the URL as the first param and the req/res callback as the second param to get all authors. calls the select method on the knex database and then returns a response with the status code 200 and the parsed authors. 
+ 

To seed the data, I'll want to write a function createAuthor = (knex, author) => that will insert each author's name and bio into the table and automatically generate an id. 

I'll also want to write a function createBook = (knex, book) => that will insert each book's title and pub into the table and automatically generate an id. It will also have to iterate over the authors array and compare the author names; if the author names match, it should add a foreign key with that author's id. 