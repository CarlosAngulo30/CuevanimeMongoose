class DataAccessError extends Error{
    constructor(message){
        super(message)
        this.name = "DataAccessError"
        this.statusCode = 500
    }
}

module.exports = DataAccessError