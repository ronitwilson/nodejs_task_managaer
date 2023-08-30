const route_error_handler = (fun) => {
    return async(req, res, next) => {
        try {
            await fun(req, res, next)
       } catch (error) {
           next(error)
       }
    }
}

module.exports = route_error_handler