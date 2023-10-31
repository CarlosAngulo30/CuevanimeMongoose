class dataAccessError extends Error{
    constructor(message){
        super(message)
        this.name = "DataAccessError"
        this.statusCode = 500
    }
}

module.exports = {
    dataAccessError
}