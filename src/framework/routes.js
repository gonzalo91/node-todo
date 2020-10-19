const express = require('express');
const authentication = require('../features/authentication/presentation/routes');

const apiRouter = () => {
    const routes = express.Router();


    const authenticationRouter = authentication();    
    routes.use('/auth', authenticationRouter);

    
    
    return routes;
};


module.exports = apiRouter;
