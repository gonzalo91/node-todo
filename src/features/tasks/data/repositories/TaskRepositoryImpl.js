const Task = require('../models/Task');


module.exports = class TaskRepositoryImpl {



    async create(taskEntity) {

        let taskModel = new Task({
            'name': taskEntity.name,
            'description': taskEntity.description,
            'owner': taskEntity.owner,
        })
        console.log(taskEntity);


        return await taskModel.save();
    }

    async findById(taskId, userId) {
        let task = await Task.find({ '_id': taskId, 'owner': userId })

        return task;
    }

    async findAll(userId) {
        let tasks = await Task.find({ 'owner': userId })

        return tasks;
    }

    async findDoneOrNot(userId, done) {
        let tasks = await Task.find({ 'owner': userId, 'done': done, })

        return tasks;
    }



    async updateById(userId, taskEntity) {
        let task = await Task.findOneAndUpdate({ '_id': taskEntity._id, 'owner': userId }, taskEntity, { new: true })

        return task;
    }

    async deleteById(userId, taskId) {
        let task = await Task.findOneAndDelete({ '_id': taskId, 'owner': userId })

        return task;
    }



}