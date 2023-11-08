const express = require('express');
// new router allow us to route everything to /api without having to specify it on every sindle route
const router = express.Router();
const User = require('./models').User;
const Course = require('./models').Course;
const fs = require('fs');

// // Array to keep track of user and course records as they are created
// const users = [];
// const courses = [];


/**
 * Handler funciton to wrap each route with. Reduces try... catch blocks
 * @param {function} cb 
 * @returns callback
 */
function asyncHandler(cb){
    return async (req, res, next)=>{
        try {
            await cb(req, res, next)
        } catch (err) {
            next(err);
        }
    };
};


/**
 * Handler function to save data
 * 
 */
function save(data){
    return new Promise((resolve, reject) => {
        fs.writeFile()
    })
}


// ---------- Users Routes ------------


// GET list of all currently authenticated users
// router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
router.get('/users', asyncHandler(async (req, res) => {
    console.log('GET details of authenticated users')
    const users = await User.findAll();

    res.status(200).json(users);
}));
    
    
// POST to CREATE a new user
router.post('/users', asyncHandler(async (req, res) => {
    try {
        await User.create(req.body);
        // Set the status to 201 Created and end the response
        // Set the location header to "/"
        res.status(201).setHeader('Location', '/').end()            /// WHAT DOES THIS MEAN??
    } catch (error) {
        console.log('Error: ', error);
    }
}));



// ---------- Courses Routes ------------

// GET list of all courses
router.get('/courses', asyncHandler(async (req, res) => {
    console.log('GET list of courses')
    const courses = await Course.findAll();

    res.status(200).json(courses);
}));

// GET individual course
router.get('/courses/:id', asyncHandler(async (req, res) => {
    console.log('GET individual course')
    const courseId = req.params.id
    const courses = await Course.findAll();
    const course = courses.find(item => item.id == courseId)
    if (course) {
        res.status(200).json(course)
    } else {
        res.status(404).json({ message: 'Course not found'});
    };    
}));

// POST to CREATE a new course
router.post('/courses', asyncHandler(async (req, res) => {
    try {
        await Course.create(req.body);
        // Set the status to 201 Created and end the response
        // Set the location header to "/"
        res.status(201).setHeader('Location', '/').end()
    } catch (error) {
        console.log('Error: ', error);
    }    
}));

// PUT to UPDATE an individual course
router.put('/courses/:id', asyncHandler(async (req, res) => {
    let course;
    try {
        console.log('PUT to update an individual course')

        course = await Course.findByPk(req.params.id)

        if (course) {
            // update the course object from the request body
            await course.update(req.body);

            // For a put request, it's convention to send status 204 (meaning no content == everything went OK but there's nothing to send back)
            // Must end the request with .end
            res.status(204).end();
        } else {
            res.status(400).json({message: "Quote not found"});
        }
        
    } catch (error) {
        console.log('Error: ', error);
    }
}));


// DELETE an individual course
router.delete('/courses/:id', asyncHandler(async (req, res) => {
    console.log('DELETE an individual course')
    let course;
    try {
        course = await Course.findByPk(req.params.id)
        if (course) {
            await course.destroy();
            // For a put request, it's convention to send status 204 (meaning no content == everything went OK but there's nothing to send back)
            // Must end the request with .end
            res.status(204).end();
        } else {
            res.status(400).json({message: "Quote not found"});
        }
    } catch (error) {
        console.log('Error: ', error);
    }
}));



module.exports = router;