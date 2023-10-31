const UsuarioDAO = require('../dataAccess/UsuarioDAO')
const {AppError} = require('../utils/appError')

class UsuarioController{
    static async crearUsuario(req, res, next){
        try {
            const usuarioData = req.body
            const usuario = await UsuarioDAO.crearUsuario(usuarioData)
            res.status(201).json(usuario)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async login(req, res) {
        if(!UsuarioDAO.login(req.body)){
            res.status(500).json({
                message: 'Error al iniciar sesión'
            })
        }
        try{
            const user = req.body
            const token = await jwt.generarToken(req.body)
            res.set('authorization', `Bearer ${token}`)
            res.status(200).json({user})
        } catch(error){
            res.status(500).json({
                message: error.message
            })
        }
    }


    static async obtenerUsuarioPorId(req, res, next){
        try {
            const id = req.params.id
            const usuario = await UsuarioDAO.obtenerUsuarioPorId(id)
            res.status(200).json(usuario)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async actualizarUsuario(req, res, next){
        try {
            const id = req.params.id
            const usuarioData = req.body
            const usuario = await UsuarioDAO.actualizarUsuario(id, usuarioData)
            res.status(200).json(usuario)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async eliminarUsuario(req, res, next){
        try {
            const id = req.params.id
            const usuario = await UsuarioDAO.eliminarUsuario(id)
            res.status(200).json({message: 'Usuario '+usuario.nickname+' eliminado correctamente'})
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerUsuarios(req, res, next){
        try {
            const limit = req.params.limit || 10
            const usuarios = await UsuarioDAO.obtenerUsuarios(limit)
            res.status(200).json(usuarios)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }
}

module.exports = UsuarioController