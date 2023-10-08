const Usuario= require('../models/Usuario')

class UsuarioDAO{
    constructor(){};
    
    static async crearUsuario(usuarioData){
        try {
            const usuario=new Usuario(usuarioData)
            return await usuario.save()
        } catch (error) {
            throw error
        }
    }

    static async obtenerUsuarioPorId(id){
        try {
            return await Usuario.findById(id)
        } catch (error) {
            throw error
        }
    }

    static async actualizarUsuario(id,usuarioData){
        try {
            return Usuario.findByIdAndUpdate(id,usuarioData,{new:true})
        } catch (error) {
            throw error
        }
    }

    static async eliminarUsuario(id){
        try {
            return Usuario.findByIdAndRemove(id)
        } catch (error) {
            throw error
        }
    }

    static async obtenerUsuarios(limit=10){
        try {
            return await Usuario.find().limit(limit)
        } catch (error) {
            throw error
        }
    }
}

module.exports = UsuarioDAO;