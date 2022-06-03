const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.set('port', process.env.PORT || 3001);
app.locals.title = "Branch out API"

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`)
})

app.get('/api/v1/courses', async (req, res) => {
  try{
    const courses = await database('courses').join('lessons','courses.id', '=', 'lessons.courses_id').select(); //consider refactor

    const cleanedCourses = courses
      .reduce((acc,cur) => {
        if(!acc.find(each => cur.title === each.title)) {
          acc.push({
            title: cur.title,
            author: cur.author,
            overview: cur.overview,
            lessons: [
              {lesson_title: cur.lesson_title,lesson_content: cur.lesson_content}
            ],
            courses_id: cur.courses_id
          })
        } else {
          acc[acc.findIndex(each => cur.title === each.title)].lessons.unshift({lesson_title: cur.lesson_title,lesson_content: cur.lesson_content})
        }
        return acc
      },[])

    res.status(200).json(cleanedCourses)
  } catch (error){
    res.status(500).json({error});
  }
})

app.delete('/api/v1/courses', async (req, res) => {
const id = req.body.id

  try{
    const courseToRemove = await database('courses').where('id', id).select();
    const lessons = await database('lessons').where('courses_id', id).del();
    const courses = await database('courses').where('id', id).del();

    res.status(200).json({deletedCourse:courseToRemove})
  } catch (error){
    res.status(404).json({error});
  }
})

app.get('/api/v1/lessons', async (req, res) => {
  try{
    const lessons = await database('lessons').select();
    res.status(200).json(lessons)
  } catch (error){
    res.status(500).json({error});
  }
})

app.get('/api/v1/:courses_id/lessons', async (req, res) => {
  try{
    const lessons = await database('lessons').where('courses_id', req.params.courses_id).select();
    res.status(200).json(lessons)
  } catch (error){
    res.status(500).json({error});
  }
})

app.post('/api/v1/courses', async(req, res) => {
  const course = req.body;
  for(let requiredParameter of ['title', 'author', 'overview']){
      if(!course[requiredParameter]){
        return res
          .status(422)
          .send({ error: `Expected format: {title: <String>, author: <String>, overview: <String>}. Youre missing a "${requiredParameter}" property.`})
      }
  }

  try{
    const id = await database('courses').insert(course, "id");
    res.status(201).json(id)
  } catch (error){
    res.status(500).json({error})
  }
})

app.post('/api/v1/lessons', async(req, res) => {
  const lesson = req.body;
  for(let requiredParameter of ['lesson_title', 'lesson_content', 'courses_id']){
      if(!lesson[requiredParameter]){
        return res
          .status(422)
          .send({ error: `Expected format: {title: <String>, author: <String>, overview: <String>, lessons: <Array>}. Youre missing a "${requiredParameter}" property.`})
      }
  }

  try{
    const id = await database('lessons').insert(lesson, "id");
    res.status(201).json(id)
  } catch (error){
    res.status(500).json({error})
  }
})
