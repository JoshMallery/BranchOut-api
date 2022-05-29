/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 const coursesData = require('../../data/coursesData');
  // Deletes ALL existing entries
    const createCourse = async (knex, course) => {
      const courseId = await knex('courses').insert({
        title: course.title,
        author: course.author,
        overview: course.overview,
        lessons: course.lessons
      }, 'id');

    let lessonPromises = course.lessons.map(lesson => {
      return createLesson(knex, {
        lessons_title: lesson.lessons_title,
        lessons_content: lesson.lessons_content,
        courses_id: courseId[0].id
      })
    });
    return Promise.all(lessonPromises);
  };
  const createLesson = (knex, lesson) => {
    return knex('lessons').insert(lesson);
  };
  exports.seed = async function(knex) {

  try {
  await knex('lessons').del()
  await knex('courses').del()

  let coursePromises = coursesData.map( course => {
    return createCourse(knex, paper);
  });

    return Promise.all(coursePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
