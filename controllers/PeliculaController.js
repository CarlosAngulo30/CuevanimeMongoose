const PeliculaDAO = require('../dataAccess/PeliculaDAO')

class PeliculaController{
    static async crearPelicula(req, res){
        try {
            const peliculaData = req.body
            const pelicula = await PeliculaDAO.crearPelicula(peliculaData)
            res.status(201).json(pelicula)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerPeliculaPorId(req, res){
        try {
            const id = req.params.id
            const pelicula = await PeliculaDAO.obtenerPeliculaPorId(id)
            res.status(200).json(pelicula)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async actualizarPelicula(req, res){
        try {
            const id = req.params.id
            const peliculaData = req.body
            const pelicula = await PeliculaDAO.actualizarPelicula(id, peliculaData)
            res.status(200).json(pelicula)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async eliminarPelicula(req, res){
        try {
            const id = req.params.id
            const pelicula = await PeliculaDAO.eliminarPelicula(id)
            res.status(200).json({message: 'Pelicula '+pelicula.nombre+' eliminada correctamente'})
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerPeliculas(req, res){
        try {
            const limit = req.params.limit || 10
            const peliculas = await PeliculaDAO.obtenerPeliculas(limit)
            res.status(200).json(peliculas)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }
}

module.exports = PeliculaController