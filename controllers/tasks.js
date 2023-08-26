const TaskModel  = require("../models/tasks") 

const getAllTasks = async (req, res) => {
    console.log("get all tasks ")
    try {
        const tasks = await TaskModel.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json({error})
    }
}

const createTask = async (req, res) => {
    console.log("creat task function")
    console.log(req.body)
    try {
        const task_obj = await TaskModel.create(req.body)
        res.status(201).json({task_obj})   
    } catch (error) {
        res.status(500).json({error})        
    }
}

const getTask = async (req, res) => {
    console.log(`get task with id ${req.params.id}`)
    try {
        const task_obj = await TaskModel.findOne({_id: req.params.id})
        if (task_obj) {
            res.status(200).json({task: task_obj})
        } else {
            res.status(404).json({msg: "task with this id not found"})
        }
        
    } catch (error) {
        res.status(501).json({msg:error})
    }
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