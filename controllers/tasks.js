const getAllTasks = (req, res) => {
    console.log("reaches here")
    res.json(req.body)
}

const createTask = (req, res) => {
    res.send('create task')
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