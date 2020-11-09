const express = require('express');
const d_i = require('./../../../dependency_injection')


module.exports = () => {

    const create = async(req, res, next) => {
        const taskRepository = await d_i.singleton.get('repository.Task');

        try {

            let task = {
                'name': req.body.name,
                'description': req.body.description,
                'owner': req.user,
            }

            res.json(await taskRepository.create(task));
        } catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
    }

    const get = async(req, res, next) => {

        try {

            res.json(await taskRepository.findById(req.body.id, req.user._id));

        } catch (e) {
            console.log(e);
            res.status(400).json(e)
        }

    }

    const getAll = async(req, res, next) => {
        const taskRepository = await d_i.singleton.get('repository.Task');

        let done = req.query.done;

        try {

            if (done == undefined)
                res.json(await taskRepository.findAll(req.user._id));
            else
                res.json(await taskRepository.findDoneOrNot(req.user._id, done));

        } catch (e) {
            console.log(e);
            res.status(400).json(e)
        }

    }

    const update = async(req, res, next) => {

        const taskRepository = await d_i.singleton.get('repository.Task');

        let taskEntity = req.body.task

        try {

            res.json(await taskRepository.updateById(req.user._id, taskEntity));

        } catch (e) {
            console.log(e);
            res.status(400).json(e)
        }



    }

    const remove = async(req, res, next) => {

        const taskRepository = await d_i.singleton.get('repository.Task');

        let taskId = req.body.taskId;

        try {

            res.json(await taskRepository.deleteById(req.user._id, taskId));

        } catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
    }





    return { create, get, getAll, update, remove }
}