const mongoose = require("mongoose")
const UsuarioDAO = require('../dataAccess/UsuarioDAO')

function validateCrearUsuario(req, res, next) {
    const { nickname, password, email } = req.body
    if (!nickname || !password || !email) {
        return res.status(400).json({ message: "Los campos nickname, password y email son obligatorios" })
    }
    next()
}

function validateLogin(req, res, next) {
    const { nickname, password} = req.body
    if (!nickname || !password) {
        return res.status(400).json({ message: "Los campos nickname, password son obligatorios" })
    }
    next()
}

function validateUsuarioId(req, res, next) {
    try {
        const Usuario = UsuarioDAO.obtenerUsuarioPorId(new mongoose.Types.ObjectId(req.params.id));
        if (!Usuario) {
            return res.status(404).json({
                message: 'No existe Usuario con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({ message: "El id no es valido" })
    }
    next()
}

function validateActualizarUsuario(req, res, next) {
    try {
        const Usuario = UsuarioDAO.obtenerUsuarioPorId(new mongoose.Types.ObjectId(req.params.id));
        if (!Usuario) {
            return res.status(404).json({
                message: 'No existe Usuario con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({ message: "El id no es valido" })
    }
    next()
}


module.exports = {
    validateCrearUsuario,
    validateActualizarUsuario,
    validateUsuarioId,
    validateLogin
}