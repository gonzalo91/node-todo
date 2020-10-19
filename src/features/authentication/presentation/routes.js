const express = require('express');
const UserController = require('./UserController');

// address - api/students
// load dependencies
const authRouter = () => {
    const router = express.Router();
    
    const controller = UserController();

    router.get('/register', controller.registerUser)
    router.get('/getToken', controller.getToken)
    
    return router;
};


module.exports = authRouter;
