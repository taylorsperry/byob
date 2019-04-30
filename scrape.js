var Nightmare = require('nightmare')
var nightmare = Nightmare()
var fs = require('fs')

// nightmare
//   .goto('https://www.fsgoriginals.com/authors')
//   .wait('h4')
//   .evaluate(function () {
//     var infoNodes = document.querySelectorAll('h4')
//       var list = [].slice.call(infoNodes);
//       return list.map(function(node) {
//         return node.innerText
//       })
//   })
//   .end()
//   .then(function (result) {
//     fs.writeFileSync('authorsData.js', JSON.stringify(result))
//     console.log('success')
//   })
//   .catch(function (error) {
//     console.error('Search failed', error)
//   })

  nightmare
    .goto('https://www.fsgoriginals.com/books')
    .wait('.book-about')
    .evaluate(function () {
      var infoNodes = document.querySelectorAll('.book-about')
      var list = [].slice.call(infoNodes);
      return list.map(function(node) {
        return node.innerText
      })
    })
    .end()
    .then(function(result) {
      fs.writeFileSync('booksData.js', JSON.stringify(result))
      console.log('success')
    })
    .catch(function(error) {
      console.log('Search failed', error)
    })