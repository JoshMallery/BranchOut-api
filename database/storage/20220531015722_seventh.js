/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
   console.log('i ran!!! in the 7th migration')
   return knex.schema
     .table('courses', function(table) {
       table.increments('id').primary();
       table.string('title');
       table.string('author');
       table.string('overview');
     })
     .table('lessons', function(table) {
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
