const booksData = require('../../booksData')
const authorsData = require('../../authorsData')


const createAuthor = (knex, author) => {
  return knex('authors').insert({
    name: author.name,
    bio: author.bio
  }, 'id')
  // create bookPromises array
  //iterate over booksData and if book.au_name === author.name, bookPromises.push(createBook({ title, pub, au_id: authorId}))
  //return Promise.all(bookPromises)
}


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