const Reproductor= require('../models/Reproductor')
const DataAccessError = require('../errors/dataAccessError')
const NoDataFoundError = require('../errors/NoDataFoundError')

class ReproductorDAO{
    constructor(){};
    
    static async crearReproductor(reproductorData){
        try {
            const reproductor=new Reproductor(reproductorData)
            return await reproductor.save()
        } catch (error) {
            throw new DataAccessError("Se ha producido un problema al crear el reproductor")
        }
    }

    static async obtenerReproductorPorId(id){
        try {
            return await Reproductor.findById(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener el reproductor")
        }
    }

    static async actualizarReproductor(id,reproductorData){
        try {
            return Reproductor.findByIdAndUpdate(id,reproductorData,{new:true})
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al actualizar el reproductor")
        }
    }

    static async eliminarReproductor(id){
        try {
            return Reproductor.findByIdAndRemove(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al eliminar el reproductor")
        }
    }

    static async obtenerReproductors(limit=10){
        try {
            return await Reproductor.find().limit(limit)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener todos los reproductores")
        }
    }
}

module.exports = ReproductorDAO;