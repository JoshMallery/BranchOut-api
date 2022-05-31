const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.NODE_ENV || 3001);
app.locals.title = "Branch out API"

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}`)
})

app.get('/api/v1/courses', async (req, res) => {
  try{
    const courses = await database('courses').join('lessons','courses.id', '=', 'lessons.courses_id').select();
    res.status(200).json(courses)
  } catch (error){
    res.status(500).json({error});
  }
})

app.delete('/api/v1/courses', async (req, res) => {
const id = req.body.id
console.log(id)

  try{
    const lessons = await database('lessons').where('courses_id', id).del();
    const courses = await database('courses').where('id', id).del();

    res.status(204).json('Successful Deletion')
  } catch (error){
    res.status(500).json({error});
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
    res.status(201).json({id})
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
    res.status(201).json({id})
  } catch (error){
    res.status(500).json({error})
  }
})

// app.post('/api/v1/lessons', async(req, res) => {
//   const lesson = req.body;
//   for(let requiredParameter of ['lesson_title', 'lesson_content', 'courses_id']){
//       if(!lesson[requiredParameter]){
//         return res
//           .status(422)
//           .send({ error: `Expected format:  You're missing a "${requiredParameter}" property.`})
//       }
//   }
//
//   try{
//     const prev = await database('courses').where('id', lesson['courses_id']).select('lessons')
//     const id = await database('courses').where('id', lesson['courses_id']).select('lessons').update({lessons:{lesson,...prev}})
//     res.status(201).json({id})
//   } catch (error){
//     res.status(500).json({error})
//   }
// })
