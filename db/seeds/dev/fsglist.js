const booksData = require('../../booksData')
const authorsData = require('../../authorsData')


const createAuthor = (knex, author) => {
  return knex('authors').insert({
    name: author.name,
    bio: author.bio
  }, 'id')
  .then(authorIds => {
    let bookPromises = [];
    booksData.forEach(book => {
      if (book.au_name === author.name) {
        bookPromises.push(
          createBook(knex, {
            title: book.title,
            pub: book.pub,
            au_id: authorIds[0]
          })
        )
      }
    })
    return Promise.all(bookPromises)
  })
}

const createBook = (knex, book) => {
  return knex('books').insert(book)
};

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(() => knex('authors').del())
    .then(function () {
      // Inserts seed entries
      let authorPromises = [];

      authorsData.forEach(author => {
        authorPromises.push(createAuthor(knex, author))
      })
      
      return Promise.all(authorPromises)
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};