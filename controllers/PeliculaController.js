const PeliculaDAO = require('../dataAccess/PeliculaDAO')
const {AppError} = require('../utils/appError')

class PeliculaController{
    static async crearPelicula(req, res, next){
        try {
            const {nombre, sinopsis, calificacionPromedio} = req.body
            if(!nombre || !sinopsis || !calificacionPromedio ){
                next(new AppError('Los campos nombre, sinopsis, calificacionPromedio son obligatorios',500))
            }
            const peliculaData = {nombre, sinopsis, calificacionPromedio}
            const pelicula = await PeliculaDAO.crearPelicula(peliculaData)
            res.status(201).json(pelicula)
        } catch (error) {
            next(new AppError('Error al crear la Pelicula',500))
        }
    }

    static async obtenerPeliculaPorId(req, res, next){
        try {
            const id = req.params.id
            const pelicula = await PeliculaDAO.obtenerPeliculaPorId(id)
            if(!pelicula){
                next(new AppError('No se encontro la Pelicula',404))
            }
            res.status(200).json(pelicula)
        } catch (error) {
            next(new AppError('No se logro obtener la Pelicula',404)) 
        }
    }

    static async actualizarPelicula(req, res, next){
        try {
            const id = req.params.id
            const peliculaData = req.body
            const pelicula = await PeliculaDAO.actualizarPelicula(id, peliculaData)
            if(!pelicula){
                next(new AppError('No se encontro la Pelicula',404))
            }
            res.status(200).json(pelicula)
        } catch (error) {
            next(new AppError('Error al actualizar la Pelicula',500)) 
        }
    }

    static async eliminarPelicula(req, res, next){
        try {
            const id = req.params.id
            const peliculaData = req.body
            const pelicula = await PeliculaDAO.eliminarPelicula(id)
            if(!pelicula){
                next(new AppError('No se encontro la Pelicula',404))
            }
            res.status(200).json({message: 'Pelicula eliminada correctamente'})
        } catch (error) {
            next(new AppError('Error al eliminar el Pelicula',500)) 
        }
    }

    static async obtenerPeliculas(req, res, next){
        try {
            const limit = req.params.limit || 10
            const peliculas = await PeliculaDAO.obtenerPeliculas(limit)
            res.status(200).json(peliculas)
        } catch (error) {
            next(new AppError('No se logro obtener las Peliculas',500)) 
        }
    }
}

module.exports = PeliculaController