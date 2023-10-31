const RatingDAO = require('../dataAccess/RatingDAO')

class RatingController{
    static async crearRatingAnime(req, res){
        try {
            const idAnime = req.params.id
            const ratingData = req.body
            const rating = await RatingDAO.crearRating(ratingData, idAnime)
            res.status(201).json(rating)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async crearRatingPelicula(req, res){
        try {
            const idPelicula = req.params.id
            const ratingData = req.body
            const rating = await RatingDAO.crearRating(ratingData, idPelicula)
            res.status(201).json(rating)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }
    static async obtenerRatingPorId(req, res){
        try {
            const id = req.params.id
            const rating = await RatingDAO.obtenerRatingPorId(id)
            res.status(200).json(rating)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }

    static async actualizarRating(req, res){
        try {
            const id = req.params.id
            const ratingData = req.body
            const rating = await RatingDAO.actualizarRating(id, ratingData)
            res.status(200).json(rating)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }

    static async eliminarRating(req, res){
        try {
            const id = req.params.id
            const rating = await RatingDAO.eliminarRating(id)
            res.status(200).json({message: 'Rating '+rating.contentType+' eliminado correctamente'})
        } catch (error) {
            res.status(error.statusCode).json({message:error.message}) 
        }
    }

    static async obtenerRatings(req, res){
        try {
            const limit = req.params.limit || 10
            const ratings = await ratingDAO.obtenerRatings(limit)
            res.status(200).json(ratings)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})  
        }
    }
}

module.exports = RatingController