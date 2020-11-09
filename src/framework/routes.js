const { response } = require('express');
const express = require('express');
authentication = require('../features/authentication/presentation/routes');

const expressValidator = require('express-validator');

const authMiddleware = require('./middleware/auth');

const apiRouter = () => {
    const routes = express.Router();

    const authenticationRouter = authentication();
    routes.use('/auth', authenticationRouter);

    routes.get('/isLogged', authMiddleware, async(req, res) => {

        console.log(req.user);
        res.json(req.user);
    });



    return routes;
};


module.exports = apiRouter;