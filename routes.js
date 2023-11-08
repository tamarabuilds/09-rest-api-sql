const express = require('express');
// new router allow us to route everything to /api without having to specify it on every sindle route
const router = express.Router();
const User = require('./models').User;
const Course = require('./models').Course;

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

// ---------- Users Routes ------------


// GET details for all currently authenticated users
// router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
router.get('/users', asyncHandler(async (req, res) => {
    console.log('GET details of authenticated users')
    const users = await  
    
    // res.status(200).json( users );
    res.status(200).json({

    });
}));
    
    
// POST to CREATE a new user
router.post('/users', asyncHandler(async (req, res) => {
    console.log('POST to create a new user')
    
    const user = req.body;
    
    // add user the 'users' array for initial testing
    users.push(user);
    
    // Set the status to 201 Created and end the response
    // Set the location header to "/"
    res.status(201).setHeader('Location', '/').end()
}));



// ---------- Courses Routes ------------

// GET list of courses
router.get('/courses', asyncHandler(async (req, res) => {
    console.log('GET list of courses')
    
    res.status(200).json( courses );
}));

// GET individual course
router.get('/courses/:id', asyncHandler(async (req, res) => {
    console.log('GET individual course')
    const courseId = req.params.id
    const course = courses.find(record => record.id == courseId)
    if (course) {
        res.status(200).json(course)
    } else {
        res.status(404).json({ message: 'Course not found'})
    };    
}));

// POST to CREATE a new course
router.post('/courses', asyncHandler(async (req, res) => {
    console.log('POST to create a new course')
    
    const course = req.body;
    
    // add user the 'users' array for initial testing
    courses.push(course);
    
    // Set the status to 201 Created and end the response
    // Set the location header to "/"
    res.status(201).setHeader('Location', '/').end()
}));

// PUT to UPDATE an individual course
router.put('/courses/:id', asyncHandler(async (req, res) => {
    console.log('PUT to update an individual course')
    const courseId = req.params.id
    const course = courses.find(record => record.id == courseId)
    if (course) {
        course.title = req.body.title;
        course.description = req.body.description;
        course.estimatedTime = req.body.estimatedTime;
        course.materialsNeeded = req.body.materialsNeeded;
        await save(courses);
        // For a put request, it's convention to send status 204 (meaning no content == everything went OK but there's nothing to send back)
        // Must end the request with .end
        res.status(204).end();
    } else {
        res.status(400).json({message: "Quote not found"});
    }
}));


// DELETE an individual course
router.delete('/courses/:id', asyncHandler(async (req, res) => {
    // throw new Error("somthing terrible  hrouterend and we have a server error now")
    console.log('DELETE an individual course')
    const courseId = req.params.id
    const course = courses.find(record => record.id == courseId)
    if (course) {
        courses = courses.filter(record => record.id != courseId)
        await save(courses);
        // For a put request, it's convention to send status 204 (meaning no content == everything went OK but there's nothing to send back)
        // Must end the request with .end
        res.status(204).end();
    } else {
        res.status(400).json({message: "Quote not found"});
    }
}));





module.exports = router;