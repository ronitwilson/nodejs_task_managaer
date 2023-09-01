class customError extends Error{
    constructor(msg, status_code) {
        super(msg)
        this.status_code = status_code
    }
}

const createCustomError = (msg, status_code) => {
    console.log("createCustomError")
    return new customError(msg, status_code)
}

module.exports = { createCustomError, customError}