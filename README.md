# branchOut

### Group Project

## Overview

If you are an instructor who struggles with an endless amount of paper documents to keep track of for all the impressive lessons you write, might we suggest you go out on a limb and trust branchOut with all your lesson planning needs! It's as simple as visiting the branchOut website to view courses and the lessons which go along with them, or if you're ready to write a whole new course, just click on the 'Add New Course' tab. This will allow you to enter your amazing content and write as many lessons as you need to go along with it. If you need some time to create new lesson ideas it is very easy to come back and add lessons to an existing course. Your genius plans will be safely stored in the branchOut database.


### [branchOut-api Deploy Link](https://joshmallery.github.io/BranchOut-api/)
### [branchOut Front-end Deploy Link](https://joshmallery.github.io/BranchOut)

## Views of Postman and Postico-
We used Postman and Postico to test the routes our data would take to make sure it was secure before offering the service to our valued instructors.

### Testing a GET request via Postman:
![branchOut GET request](https://user-images.githubusercontent.com/96502923/172272933-37454986-4323-4902-999f-688fae2d4d2e.png)


### Testing a POST request via Postman:
![branchOut POST request](https://user-images.githubusercontent.com/96502923/172272809-36a803f4-c852-4984-acd2-44f8960d7f03.png)


### Viewing our courses seed data via Postico:
![Course seed data](https://user-images.githubusercontent.com/96502923/172272651-84f75e4e-1698-4fc2-99ce-77343f956cb0.png)


### Viewing our lessons seed data via Postico:
![Lesson seed data](https://user-images.githubusercontent.com/96502923/172273081-eafdb63e-6330-4861-ad06-a3d30fbe9048.png)


### Error Handling:
![Error Handling](https://user-images.githubusercontent.com/96502923/172273135-eb63da7d-0055-4f35-8b49-d4efba86d9d3.png)

## Express

- We used Express to make the features of Node more legible and comprehensive
- Additionally, we created the endpoints for our API in Express


## PostgreSQL

- We used PostgreSQL to create a database which allows users to add and delete courses as well as view existing courses
- The database was created in the form of seed data

## Knex
- Knex was used to query the data we stored in PostgreSQL database
- Using our Express endpoints, we utilized Knex to retrieve the data from the database as well as update existing data, or to add new data


## Postman and Postico Testing

- In order to make sure our Get, Post, and DELETE requests were working we used Postman to test them
- In order to see the structure and contents of our seed data we used Postico. It showed our tables of data, what each column was named, and what data was currently being stored in our database



## Local Set-Up Instructions

- From the repo click the code button and copy the SSH link.
- Open terminal by pressing command + space bar, and search for terminal
- Inside of your terminal type `git clone` and then paste the ssh link. It should look like this: `$git clone git@github.com:JoshMallery/BranchOut-api.git`
- In your terminal type `$cd BranchOut-api`
- Type `$npm install`
- Do not run `$npm audit fix --force`
- Type `$knex seed:run`
- Then type `$node index.js` This runs the app in the development mode.
- Open [http://localhost:3001](http://localhost:3001) to view it in your browser.
- The browser should then deploy using a local host
- Enjoy using branchOut!
- NOTE: Make sure that you type `Control + C` in your terminal when you are done using the application. This ensure the server will stop running before your close your Terminal.

## Instructions for Use

<!-- - On opening the browser, a user is free to scroll the displayed courses
- A user can click on any course to see the lessons attached to it.
- Once a user has clicked on a course, a user can see the overview of the course, and click on a lesson from the list on the right to see the contents of each lesson.
- A user can also create a new course by clicking on the 'Add New Course' tab. Once there a user can either create a new course, or choose a course to add lessons to. -->

| Purpose | URL | Verb | Request Body | Sample Response |
| ---- | ---- | ---- | ---- | ---- |
| GET All Courses | http://localhost:3001/api/v1/courses | GET | N/A | [{"title": "Lesson title", "author": "Robbie", "overview": "lesson from Robbie here", "lessons": [{"lesson_title": "lesson two", "lesson_content": "content here"},{"lesson_title": "lesson three", "lesson_content": "content lesson three"},{"lesson_title": "postgreSQL", "lesson_content": "Pick Tyler, Josh and Whitney"}], "courses_id": 14}] |
| GET Lessons for a Course | http://localhost:3001/api/v1/:courses_id/lessons | GET | N/A | [{"id": 20, "lesson_title": "lesson two", "lesson_content": "content here", "courses_id": 14}] |
| GET All Lessons | http://localhost:3001/api/v1/lessons | GET | N/A | [{"id": 20, "lesson_title": "lesson two", "lesson_content": "content here", "courses_id": 14}, {"id": 21, "lesson_title": "lesson three", "lesson_content": "content lesson three", "courses_id": 14}, {"id": 22, "lesson_title": "postgreSQL", "lesson_content": "Pick Tyler, Josh and Whitney", "courses_id": 14}] |
| POST a Course | http://localhost:3001/api/v1/courses | POST | {"title": "June1 is tomorrow", "author": "Tyler T","overview": "he has bird"} | [{ "id":38 }] |
| POST a Lesson | http://localhost:3001/api/v1/lessons | POST | {"lesson_title": "postgreSQL", "lesson_content": "Pick Tyler, Josh and Whitney", "courses_id": 18} | [{ "id":31 }] |
| DELETE a Course | http://localhost:3001/api/v1/courses | DELETE | {'id': `<idNumber>}` | {"deletedCourse": [{ "id": 13, "title": "Lorem Ipsum", "author": "Brittany", "overview": "lesson here", "lessons": [{ "lesson_title": "lesson one", "lesson_content": "blah, blah, blah"} ]}]} |



## Technologies Used

- Express
- PostgreSQL
- Heroku
- Knex
- Postman
- Postico
- GET requests
- POST requests
- DELETE requests

## Future Features

- Adding more seed data so there can be multiple users, including a student to access the courses and lessons

## Project management

- We used a [Github Project Board](https://github.com/JoshMallery/BranchOut-api/projects/1) to stay on task and meet the deadline.
- The project specs and guideline for this project can be found [here](https://frontend.turing.edu/projects/module-3/stretch.html)


### Figma Component Architecture
![Data Structure](https://user-images.githubusercontent.com/96563007/172260578-13a529f1-48ab-436f-870b-bb63c76fa7e3.png)

## Contributors

- [Josh Mallery](https://github.com/JoshMallery)
- [Tyler Tedesco](https://github.com/sted1994)
- [Whitney Perricone](https://github.com/Wperricone)
