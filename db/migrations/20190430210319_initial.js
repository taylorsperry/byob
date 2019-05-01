
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('authors', function(table) {
      table.increments('id').primary();
      table.string('name');
      table.string('bio');
      table.timestamps(true, true)
    }),

    knex.schema.createTable('books', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('pub');
      table.integer('au_id').unsigned();
      table.foreign('au_id')
        .references('authors.id')
      table.timestamps(true, true)
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('authors'),
    knex.schema.dropTable('books'),
  ])
};
