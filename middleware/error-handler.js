const error_handler = (err, req, res, next) => {
    console.log("reaches error handler ")
    return res.status(502).json({msg:err})
}

module.exports = error_handler