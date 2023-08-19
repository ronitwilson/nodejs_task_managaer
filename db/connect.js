const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://rol:rolance@nodeexpressprj.qzc3tzo.mongodb.net/nodeAPP?retryWrites=true&w=majority'


const connectDB = () => {
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }).then(() => { console.log("connectd to DB")}).catch((err) => console.log(err))
}

module.exports = {
    connectDB
}