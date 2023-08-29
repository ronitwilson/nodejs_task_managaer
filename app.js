const express = require('express');
const connectDB = require("./db/connect")
const app = express();
const port = 3000
const tasks = require("./router/tasks")
const notfound = require("./middleware/not-found")

app.use(express.json())

app.get("/debug", (req, res) => {
    res.send("task manager app")
})

app.use('/api/v1/tasks', tasks)

// middleware

app.use(notfound)


const start = async () =>  {
    try {
         await connectDB()
        app.listen(port, ()=> {
            console.log(`Task Manager App log starting at port ${port} ....`)
        })
    } catch(error) {
        console.log(error)
    }
}

start()