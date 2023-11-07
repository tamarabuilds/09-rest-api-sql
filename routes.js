const express = require('express');
// new router allow us to route everything to /api without having to specify it on every sindle route
const router = express.Router();
// pull in seeded database functions                         NEED????????
const database = require('./seed/database')

// Array to keep track of user records as they are created
const users = [];


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

// GET details for all currently authenticated users
// router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
router.get('/users', asyncHandler(async (req, res) => {
    console.log('GET details of authenticated users')
    

    res.json( users );
}));


// POST to CREATE a new user
router.post('/users', asyncHandler(async (req, res) => {
    console.log('POST to create a new user')

    const user = req.body;

    // add user the 'users' array for initial testing
    users.push(user);

    // Set the status to 201 Created and end the response
    res.status(201).end()
}));

module.exports = router;