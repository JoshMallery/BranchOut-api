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
    const courses = await database('courses').select();
    res.status(200).json(courses)
  } catch (error){
    res.status(500).json({error});
  }
})

app.get('/api/v1/lessons', async (req, res) => {
  try{
    const lessons = await database('lessons').select();
    res.status(200).json(courses)
  } catch (error){
    res.status(500).json({error});
  }
})

app.get('/api/v1/lessons/:courses_id', async (req, res) => {
  try{
    const lessons = await database('lessons').where('courses_id', req.params.courses_id).select();
    res.status(200).json(lessons)
  } catch (error){
    res.status(500).json({error});
  }
})
