const AnimeDAO = require('../dataAccess/AnimeDAO')

class AnimeController{
    static async crearAnime(req, res){
        try {
            const animeData = req.body
            const anime = await AnimeDAO.crearAnime(animeData)
            res.status(201).json(anime)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerAnimePorId(req, res){
        try {
            const id = req.params.id
            const anime = await AnimeDAO.obtenerAnimePorId(id)
            res.status(200).json(anime)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }

    static async actualizarAnime(req, res){
        try {
            const id = req.params.id
            const animeData = req.body
            const anime = await AnimeDAO.actualizarAnime(id, animeData)
            res.status(200).json(anime)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }

    static async eliminarAnime(req, res){
        try {
            const id = req.params.id
            const anime = await AnimeDAO.eliminarAnime(id)
            res.status(200).json({message: 'Anime '+anime.nombre+' eliminado correctamente'})
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }

    static async obtenerAnimes(req, res){
        try {
            const limit = req.params.limit || 10
            const animes = await AnimeDAO.obtenerAnimes(limit)
            res.status(200).json(animes)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }
}

module.exports = AnimeController