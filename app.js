const express = require('express');
const app = express();
const port = 3000

app.listen(port, ()=> {
    console.log('Task Manager App log')
})

app.get("/debug", (req, res) => {
    res.send("task manager app")
})