const express = require('express');
// new router allow us to route everything to /api without having to specify it on every sindle route
const router = express.Router();

// Array to keep track of user and course records as they are created
const users = [];
const courses = [];


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
    
    
    res.status(200).json( users );
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

// GET all courses
router.get('/courses', asyncHandler(async (req, res) => {
    console.log('GET details of courses')
    
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





module.exports = router;