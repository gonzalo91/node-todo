const express = require('express');
const TaskController = require('./TaskController');
const { body, } = require('express-validator')
const { validator } = require('../../../framework/middleware/validator');

const taskRouter = () => {
    const router = express.Router();

    const controller = TaskController();

    router.put('/create', validator([
        body('name').isLength({ min: 3 }),
    ]), controller.create)

    router.get('/', controller.getAll)
    router.post('/update', controller.update)
    router.delete('/delete', controller.remove)

    return router;
};


module.exports = taskRouter;