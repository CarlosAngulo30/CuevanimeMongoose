const Pelicula= require('../models/Pelicula')
const DataAccessError = require('../errors/DataAccessError')
const NoDataFoundError = require('../errors/NoDataFoundError')
const ValidationError = require('../errors/ValidationError')

class PeliculaDAO{
    constructor(){};
    
    static async crearPelicula(peliculaData){
        try {
            const pelicula=new Pelicula(peliculaData)
            return await pelicula.save()
        } catch (error) {
            throw new DataAccessError("Se ha producido un problema al crear la pelicula")
        }
    }

    static async obtenerPeliculaPorId(id){
        try {
            return await Pelicula.findById(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener la pelicula")
        }
    }

    static async actualizarPelicula(id,peliculaData){
        try {
            return Pelicula.findByIdAndUpdate(id,peliculaData,{new:true})
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al actualizar la pelicula")
        }
    }

    static async eliminarPelicula(id){
        try {
            return Pelicula.findByIdAndRemove(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al eliminar la pelicula")
        }
    }

    static async obtenerPeliculas(limit=10){
        try {
            return await Pelicula.find().limit(limit)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener todas las peliculas")
        }
    }
}

module.exports = PeliculaDAO;