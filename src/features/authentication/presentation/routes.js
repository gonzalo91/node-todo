const express = require('express');
const UserController = require('./UserController');
const { body, } = require('express-validator')
const { validator } = require('../../../framework/middleware/validator');

const authRouter = () => {
    const router = express.Router();

    const controller = UserController();

    router.post('/register', validator([
        body('email').isEmail(),
        body('name').isLength({ min: 3 }),
        body('password').isLength({ min: 8 }),
    ]), controller.registerUser)


    router.post('/login', validator([
        body('email').isEmail(),
        body('password').isLength({ min: 8 }),
    ]), controller.login)

    return router;
};


module.exports = authRouter;