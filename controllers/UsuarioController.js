const UsuarioDAO = require('../dataAccess/UsuarioDAO')
const jwt = require('../middlewares/verify-jwt')

class UsuarioController{
    static async crearUsuario(req, res){
        try {
            const usuarioData = req.body
            const usuario = await UsuarioDAO.crearUsuario(usuarioData)
            res.status(201).json(usuario)
        } catch (error) {
            console.log(error.message)
            res.status(error.statusCode || 500).json({message:error.message})
        }
    }

    static async login(req, res) {
        const usuarioLogin = req.body
        try{
            if(!await UsuarioDAO.login(usuarioLogin)){
                res.status(500).json({
                    message: 'Error al iniciar sesión'
                })
            }
            const user = usuarioLogin
            const token = await jwt.generarToken(user)
            res.set('authorization', `Bearer ${token}`)
            res.status(200).json({user})
        } catch(error){
            console.log("ea")
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