const Reproductor= require('../models/Reproductor')

class ReproductorDAO{
    constructor(){};
    
    static async crearReproductor(reproductorData){
        try {
            const reproductor=new Reproductor(reproductorData)
            return await reproductor.save()
        } catch (error) {
            throw error
        }
    }

    static async obtenerReproductorPorId(id){
        try {
            return await Reproductor.findById(id)
        } catch (error) {
            throw error
        }
    }

    static async actualizarReproductor(id,reproductorData){
        try {
            return Reproductor.findByIdAndUpdate(id,reproductorData,{new:true})
        } catch (error) {
            throw error
        }
    }

    static async eliminarReproductor(id){
        try {
            return Reproductor.findByIdAndRemove(id)
        } catch (error) {
            throw error
        }
    }

    static async obtenerReproductors(limit=10){
        try {
            return await Reproductor.find().limit(limit)
        } catch (error) {
            throw error
        }
    }
}

module.exports = ReproductorDAO;