const express = require('express');
const app = express();
const port = 3000
const tasks = require("./router/tasks")


app.listen(port, ()=> {
    console.log('Task Manager App log')
})

app.get("/debug", (req, res) => {
    res.send("task manager app")
})

app.use('/api/vi/tasks', tasks)

// middleware

app.use(express.json())