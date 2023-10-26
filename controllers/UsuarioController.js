const UsuarioDAO = require('../dataAccess/UsuarioDAO')
const {AppError} = require('../utils/appError')

class UsuarioController{
    static async crearUsuario(req, res, next){
        try {
            const {nickname, password, idsucripcion} = req.body
            if(!nickname || !password ){
                next(new AppError('Los campos nickname y password son obligatorios',500))
            }
            const usuarioData = {nickname, password, idsucripcion}
            const usuario = await UsuarioDAO.crearUsuario(usuarioData)
            res.status(201).json(usuario)
        } catch (error) {
            next(new AppError('Error al crear al usuario',500))
        }
    }

    static async obtenerUsuarioPorId(req, res, next){
        try {
            const id = req.params.id
            const usuario = await UsuarioDAO.obtenerUsuarioPorId(id)
            if(!usuario){
                next(new AppError('No se encontro al usuario',404))
            }
            res.status(200).json(usuario)
        } catch (error) {
            next(new AppError('No se logro obtener al usuario',404)) 
        }
    }

    static async actualizarUsuario(req, res, next){
        try {
            const id = req.params.id
            const usuarioData = req.body
            const usuario = await UsuarioDAO.actualizarUsuario(id, productoData)
            if(!usuario){
                next(new AppError('No se encontro al usuario',404))
            }
            res.status(200).json(usuario)
        } catch (error) {
            next(new AppError('Error al actualizar al usuario',500)) 
        }
    }

    static async eliminarUsuario(req, res, next){
        try {
            const id = req.params.id
            const usuarioData = req.body
            const usuario = await UsuarioDAO.eliminarUsuario(id)
            if(!usuario){
                next(new AppError('No se encontro al usuario',404))
            }
            res.status(200).json({message: 'Usuario eliminado correctamente'})
        } catch (error) {
            next(new AppError('Error al eliminar al usuario',500)) 
        }
    }

    static async obtenerUsuarios(req, res, next){
        try {
            const limit = req.params.limit || 10
            const usuarios = await UsuarioDAO.obtenerUsuarios(limit)
            res.status(200).json(usuarios)
        } catch (error) {
            next(new AppError('No se logro obtener los usuarios',500)) 
        }
    }
}

module.exports = UsuarioController