const express = require('express');
authentication = require('../features/authentication/presentation/routes');

const expressValidator = require('express-validator');

const apiRouter = () => {
    const routes = express.Router();
    
    const authenticationRouter = authentication();    
    routes.use('/auth', authenticationRouter);

    
    
    return routes;
};


module.exports = apiRouter;
