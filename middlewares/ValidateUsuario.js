const mongoose = require("mongoose")
const UsuarioDAO = require('../dataAccess/UsuarioDAO')

function validateCrearUsuario(req, res, next) {
    const { nickname, password, idsucripcion } = req.body
    if (!nickname || !password || !idsucripcion) {
        return res.status(400).json({ message: "Los campos nickname, password y suscripcion son obligatorios" })
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
    const { nickname, password, idsucripcion } = req.body
    if (!nickname || !password || !idsucripcion) {
        return res.status(400).json({ message: "Los campos nickname, password y suscripcion son obligatorios" })
    }
    next()
}


module.exports = {
    validateCrearUsuario,
    validateActualizarUsuario,
    validateUsuarioId
}