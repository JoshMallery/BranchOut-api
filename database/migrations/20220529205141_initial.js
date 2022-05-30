/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('courses', function(table) {
      table.increments('id').primary();
      table.string('title');
      table.string('author');
      table.string('overview');
      table.text('lessons');
    })
    .createTable('lessons', function(table) {
      table.increments('id').primary();
      table.string('lesson_title');
      table.text('lesson_content');
      table.integer('courses_id').unsigned()
      table.foreign('courses_id')
        .references('courses.id');

    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('lessons')
    .dropTable('courses')

};
