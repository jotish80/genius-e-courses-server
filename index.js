const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

// port
const port = process.env.PORT || 5000;

// added json data
const courses = require('./data/courses.json');

//root api
app.get('/', (req,res) =>{
    res.send('this is genius server');
});

//courses api
app.get('/courses', (req,res) =>{
    res.send(courses);
})

//dynamic courses api
app.get('/courses/:id', (req,res) =>{
    const id = req.params.id;
    const singleCourse = courses.find(course=> course.id == id);
    res.send(singleCourse);

})
 
// 
app.listen(port, ()=>{
    console.log('genius course server is running on port', port)
})

