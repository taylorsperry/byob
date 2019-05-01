
exports.up = function(knex, Promise) {
  return knex.schema
    .table('books', table => {
      table.renameColumn('au_id', 'author_id')
    })
};

exports.down = function(knex, Promise) {
  return knex.scheuma
    .table('books', table => {
      table.renameColumn('author_id', 'au_id')
    })
};
