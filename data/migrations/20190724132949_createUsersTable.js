exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments();
    table.string('username').notNull().unique();
    table.string('password').notNull();
    table.string('department').notNull();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
