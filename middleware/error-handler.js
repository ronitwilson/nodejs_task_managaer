const {customError} = require('../errors/custom-errors')

const error_handler = (err, req, res, next) => {
    console.log("reaches error handler ")
    if(err instanceof customError) {
        return res.status(err.status_code).json({msg: err.message})
    }
    return res.status(502).json({msg:err})
}

module.exports = error_handler