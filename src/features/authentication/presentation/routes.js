const express = require('express');
const UserController = require('./UserController');
const { body, } = require('express-validator')
const { validate } = require('../../../app/helpers');

const authRouter = () => {
    const router = express.Router();

    const controller = UserController();

    router.post('/register', validate([
        body('email').isEmail(),
        body('name').isLength({ min: 3 }),
        body('password').isLength({ min: 8 }),
    ]), controller.registerUser)


    router.post('/login', controller.getToken)

    return router;
};


module.exports = authRouter;