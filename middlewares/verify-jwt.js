const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

async function generarToken(user){
    try{
        const payload = {
            nickname: user.nickname,
            email: user.email
        }
        const token = await jwt.sign( payload, process.env.SECRETKEY, {expiresIn: '1h'})
        return token;
    } catch(error){
        throw error;
    }
}

async function verifyToken(req, res, next){
    try{
        const decoded= await jwt.verify(req.headers.authorization, process.env.SECRETKEY)
        next()
    } catch(error){
        throw error
    }
}

module.exports = {
    generarToken,
    verifyToken
}