const RatingDAO = require('../dataAccess/RatingDAO')
const {AppError} = require('../utils/appError')

class RatingController{
    static async crearRatingAnime(req, res, next){
        try {
            const idAnime = req.params.id
            const {calificacion, idUsuario} = req.body
            if(!calificacion ){
                next(new AppError('Los campos calificacion, idUsuario son obligatorios',500))
            }
            const ratingData = {calificacion, idUsuario}
            const rating = await RatingDAO.crearRatingAnime(ratingData, idAnime)
            res.status(201).json(rating)
        } catch (error) {
            next(new AppError('Error al crear el Rating de anime',500))
        }
    }

    static async crearRatingPelicula(req, res, next){
        try {
            const idPelicula = req.params.id
            const {calificacion, idUsuario} = req.body
            if(!calificacion ){
                next(new AppError('Los campos calificacion, idUsuario son obligatorios',500))
            }
            const ratingData = {calificacion, idUsuario}
            const rating = await RatingDAO.crearRatingPelicula(ratingData, idPelicula)
            res.status(201).json(rating)
        } catch (error) {
            next(new AppError('Error al crear el Rating de pelicula',500))
        }
    }
    static async obtenerRatingPorId(req, res, next){
        try {
            const id = req.params.id
            const rating = await RatingDAO.obtenerRatingPorId(id)
            if(!rating){
                next(new AppError('No se encontro el Rating',404))
            }
            res.status(200).json(rating)
        } catch (error) {
            next(new AppError('No se logro obtener el Rating',404)) 
        }
    }

    static async actualizarRating(req, res, next){
        try {
            const id = req.params.id
            const ratingData = req.body
            const rating = await RatingDAO.actualizarRating(id, ratingData)
            if(!Rating){
                next(new AppError('No se encontro el Rating',404))
            }
            res.status(200).json(rating)
        } catch (error) {
            next(new AppError('Error al actualizar el Rating',500)) 
        }
    }

    static async eliminarRating(req, res, next){
        try {
            const id = req.params.id
            const ratingData = req.body
            const rating = await RatingDAO.eliminarRating(id)
            if(!rating){
                next(new AppError('No se encontro el Rating',404))
            }
            res.status(200).json({message: 'Rating eliminado correctamente'})
        } catch (error) {
            next(new AppError('Error al eliminar el Rating',500)) 
        }
    }

    static async obtenerRatings(req, res, next){
        try {
            const limit = req.params.limit || 10
            const ratings = await ratingDAO.obtenerRatings(limit)
            res.status(200).json(ratings)
        } catch (error) {
            next(new AppError('No se logro obtener los Ratings',500)) 
        }
    }
}

module.exports = RatingController