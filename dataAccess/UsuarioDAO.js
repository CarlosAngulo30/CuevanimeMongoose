const Usuario= require('../models/Usuario')
const DataAccessError = require('../errors/dataAccessError')
const NoDataFoundError = require('../errors/NoDataFoundError')

class UsuarioDAO{
    constructor(){};
    
    static async crearUsuario(usuarioData){
        try {
            const usuario=new Usuario(usuarioData)
            return await usuario.save()
        } catch (error) {
            throw new DataAccessError("Se ha producido un problema al crear al usuario")
        }
    }

    static async obtenerUsuarioPorId(id){
        try {
            return await Usuario.findById(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener el usuario")
        }
    }

    static async actualizarUsuario(id,usuarioData){
        try {
            return Usuario.findByIdAndUpdate(id,usuarioData,{new:true})
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al actualizar al usuario")
        }
    }

    static async eliminarUsuario(id){
        try {
            return Usuario.findByIdAndRemove(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al eliminar al usuario")
        }
    }

    static async obtenerUsuarios(limit){
        try {
            return await Usuario.find().limit(limit)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener todos los usuarios")
        }
    }
}

module.exports = UsuarioDAO;