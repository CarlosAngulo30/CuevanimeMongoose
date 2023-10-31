const Suscripcion = require('../models/Suscripcion')
const DataAccessError = require('../errors/DataAccessError')
const NoDataFoundError = require('../errors/NoDataFoundError')

class SuscripcionDAO{
    constructor(){};
    
    static async crearSuscripcion(suscripcionData){
        try {
            const suscripcion=new Suscripcion(suscripcionData)
            return await suscripcion.save()
        } catch (error) {
            throw new DataAccessError("Se ha producido un problema al crear la suscripcion")
        }
    }

    static async obtenerSuscripcionPorId(id){
        try {
            return await Suscripcion.findById(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener la suscripcion")
        }
    }

    static async actualizarSuscripcion(id,suscripcionData){
        try {
            return Suscripcion.findByIdAndUpdate(id,suscripcionData,{new:true})
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al actualizar la suscripcion")
        }
    }

    static async eliminarSuscripcion(id){
        try {
            return Suscripcion.findByIdAndRemove(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al eliminar la suscripcion")
        }
    }

    static async obtenerSuscripcions(limit=10){
        try {
            return await Suscripcion.find().limit(limit)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener todas las suscripciones")
        }
    }
}

module.exports = SuscripcionDAO;