const AnimeDAO = require('../dataAccess/AnimeDAO')
const {AppError} = require('../utils/appError')

class AnimeController{
    static async crearAnime(req, res, next){
        try {
            const {nombre, sinopsis, calificacionPromedio, temporada, numeroCapitulo} = req.body
            if(!nombre || !sinopsis || !calificacionPromedio || !temporada || !numeroCapitulo ){
                next(new AppError('Los campos nombre, sinopsis, calificacionPromedio, temporada, numeroCapitulo son obligatorios',500))
            }
            const animeData = {nombre, sinopsis, calificacionPromedio, temporada, numeroCapitulo}
            const anime = await AnimeDAO.crearAnime(animeData)
            res.status(201).json(anime)
        } catch (error) {
            next(new AppError('Error al crear el anime',500))
        }
    }

    static async obtenerAnimePorId(req, res, next){
        try {
            const id = req.params.id
            const anime = await AnimeDAO.obtenerAnimePorId(id)
            if(!anime){
                next(new AppError('No se encontro el anime',404))
            }
            res.status(200).json(anime)
        } catch (error) {
            next(new AppError('No se logro obtener el anime',404)) 
        }
    }

    static async actualizarAnime(req, res, next){
        try {
            const id = req.params.id
            const animeData = req.body
            const anime = await AnimeDAO.actualizarAnime(id, animeData)
            if(!anime){
                next(new AppError('No se encontro el Anime',404))
            }
            res.status(200).json(anime)
        } catch (error) {
            next(new AppError('Error al actualizar el Anime',500)) 
        }
    }

    static async eliminarAnime(req, res, next){
        try {
            const id = req.params.id
            const animeData = req.body
            const anime = await AnimeDAO.eliminarAnime(id)
            if(!anime){
                next(new AppError('No se encontro el Anime',404))
            }
            res.status(200).json({message: 'Anime eliminado correctamente'})
        } catch (error) {
            next(new AppError('Error al eliminar el Anime',500)) 
        }
    }

    static async obtenerAnimes(req, res, next){
        try {
            const limit = req.params.limit || 10
            const animes = await AnimeDAO.obtenerAnimes(limit)
            res.status(200).json(animes)
        } catch (error) {
            next(new AppError('No se logro obtener los Animes',500)) 
        }
    }
}

module.exports = AnimeController