const TaskModel  = require("../models/tasks") 
const asyncWrapper = require('../middleware/route-error-handler')
const {createCustomError} = require('../errors/custom-errors')

const getAllTasks = asyncWrapper(async (req, res) => {
    console.log("get all tasks ")
    const tasks = await TaskModel.find({})
    res.status(200).json({tasks})
})

const createTask = asyncWrapper(async (req, res) => {
    console.log("creat task function")
    console.log(req.body)
    const task_obj = await TaskModel.create(req.body)
    res.status(201).json({task_obj})   
})

const getTask = asyncWrapper(async (req, res, next) => {
    console.log(`get task with id ${req.params.id}`)
        const task_obj = await TaskModel.findOne({_id: req.params.id})
        if (task_obj) {
            res.status(200).json({task: task_obj})
        } else {
            console.log("reach heree !!")
            // const error = new Error('not found')
            // error.status = 404
            // return next(error)
            return next(createCustomError("task with this id not found",402))
        }
        
})

const updateTask = async (req, res) => {
    try {
        const task_obj = await TaskModel.findOneAndUpdate({_id: req.params.id}, req.body, {
            new: true,
            runValidators: true,
            overwrite: true,
        })
        if (task_obj) {
            return
        } else {
            res.status(404).json({msg: "task with this id not found"})
        }
    } catch (error) {
        res.status(501).json({msg:error})
    }
}

const deleteTask = async(req, res) => {
    console.log(`delete task with id ${req.params.id}`)
    try {
        const task_obj = await TaskModel.findOneAndDelete({_id: req.params.id})
        if (task_obj) {
            res.status(200).json({task: task_obj})
        } else {
            res.status(404).json({msg: "task with this id not found"})
        }
        
    } catch (error) {
        res.status(501).json({msg:error})
    }
}

module.exports = {
getAllTasks,
createTask,
getTask,
updateTask,
deleteTask
}