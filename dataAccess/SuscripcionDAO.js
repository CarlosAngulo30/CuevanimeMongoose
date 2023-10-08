const Suscripcion= require('../models/Suscripcion')

class SuscripcionDAO{
    constructor(){};
    
    static async crearSuscripcion(suscripcionData){
        try {
            const suscripcion=new Suscripcion(suscripcionData)
            return await suscripcion.save()
        } catch (error) {
            throw error
        }
    }

    static async obtenerSuscripcionPorId(id){
        try {
            return await Suscripcion.findById(id)
        } catch (error) {
            throw error
        }
    }

    static async actualizarSuscripcion(id,suscripcionData){
        try {
            return Suscripcion.findByIdAndUpdate(id,suscripcionData,{new:true})
        } catch (error) {
            throw error
        }
    }

    static async eliminarSuscripcion(id){
        try {
            return Suscripcion.findByIdAndRemove(id)
        } catch (error) {
            throw error
        }
    }

    static async obtenerSuscripcions(limit=10){
        try {
            return await Suscripcion.find().limit(limit)
        } catch (error) {
            throw error
        }
    }
}

module.exports = SuscripcionDAO;