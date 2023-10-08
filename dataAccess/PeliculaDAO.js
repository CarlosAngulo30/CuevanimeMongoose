const Pelicula= require('../models/Pelicula')

class PeliculaDAO{
    constructor(){};
    
    static async crearPelicula(peliculaData){
        try {
            const pelicula=new Pelicula(peliculaData)
            return await pelicula.save()
        } catch (error) {
            throw error
        }
    }

    static async obtenerPeliculaPorId(id){
        try {
            return await Pelicula.findById(id)
        } catch (error) {
            throw error
        }
    }

    static async actualizarPelicula(id,peliculaData){
        try {
            return Pelicula.findByIdAndUpdate(id,peliculaData,{new:true})
        } catch (error) {
            throw error
        }
    }

    static async eliminarPelicula(id){
        try {
            return Pelicula.findByIdAndRemove(id)
        } catch (error) {
            throw error
        }
    }

    static async obtenerPeliculas(limit=10){
        try {
            return await Pelicula.find().limit(limit)
        } catch (error) {
            throw error
        }
    }
}

module.exports = PeliculaDAO;