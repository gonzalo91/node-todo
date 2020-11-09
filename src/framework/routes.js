const { response } = require('express');
const express = require('express');
const authentication = require('../features/authentication/presentation/routes');
const tasks = require('../features/tasks/presentation/routes');
const expressValidator = require('express-validator');
const authMiddleware = require('./middleware/auth');

const apiRouter = () => {
    const routes = express.Router();

    const authenticationRouter = authentication();
    routes.use('/auth', authenticationRouter);

    const tasksRouter = tasks();
    routes.use('/tasks', authMiddleware, tasksRouter);


    return routes;
};


module.exports = apiRouter;