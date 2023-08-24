const TaskModel  = require("../models/tasks") 

const getAllTasks = (req, res) => {
    console.log("reaches here")
    res.json(req.body)
}

const createTask = async (req, res) => {
    console.log("creat task function")
    console.log(req.body)
    const task_obj = await TaskModel.create(req.body)
    res.status(201).json({task_obj})
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
getAllTasks,
createTask,
getTask,
updateTask,
deleteTask
}