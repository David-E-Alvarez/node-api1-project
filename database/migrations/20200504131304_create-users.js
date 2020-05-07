exports.up = function(knex) {
    // don't forget the return statement
    return knex.schema.createTable('users', tbl => {
      // creates a primary key called id
      tbl.increments();
      // creates a text field called name which is both required and unique
      tbl.string('name', 128).notNullable().unique();
      // creates a numeric field called budget which is required
      tbl.text('bio');
    });
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema.dropTableIfExists('users');
  };