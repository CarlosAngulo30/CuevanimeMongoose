const mongoose = require("mongoose")
const RatingDAO = require('../dataAccess/RatingDAO')
const PeliculaDAO = require('../dataAccess/PeliculaDAO')
const AnimeDAO = require('../dataAccess/AnimeDAO')

function validateCrearRatingAnime(req, res, next){
    const {calificacion, contentType, idUsuario} = req.body
    if(!calificacion || !contentType || !idUsuario ){
        return res.status(400).json({message: "Los campos calificacion, contentType, idUsuario son obligatorios"})
    }
    try {
        const anime = AnimeDAO.obtenerAnimePorId(new mongoose.Types.ObjectId(req.params.id))
        if(!anime){
            return res.status(404).json({
                message: 'No existe anime con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateCrearRatingPelicula(req, res, next){
    const {calificacion, contentType, idUsuario} = req.body
    if(!calificacion || !contentType || !idUsuario ){
        return res.status(400).json({message: "Los campos calificacion, contentType, idUsuario son obligatorios"})
    }
    try {
        const pelicula = PeliculaDAO.obtenerPeliculaPorId(new mongoose.Types.ObjectId(req.params.id))
        if(!pelicula){
            return res.status(404).json({
                message: 'No existe pelicula con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateRatingId(req, res, next){
    try {
        new mongoose.Types.ObjectId(req.params.id)
        const rating = RatingDAO.obtenerRatingPorId(id);
        if(!rating){
            return res.status(404).json({
                message: 'No existe Rating con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateActualizarRating(req, res, next){
    try {
        new mongoose.Types.ObjectId(req.params.id)
        const rating = RatingDAO.obtenerRatingPorId(id);
        if(!rating){
            return res.status(404).json({
                message: 'No existe Rating con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    const {calificacion, contentType, contentId, idUsuario} = req.body
    if(!calificacion || !contentType || !contentId || !idUsuario ){
        return res.status(400).json({message: "Los campos calificacion, contentType, contentId , idUsuario son obligatorios"})
    }
    next()
}



module.exports = {
    validateCrearRatingAnime,
    validateCrearRatingPelicula,
    validateActualizarRating,
    validateRatingId
}