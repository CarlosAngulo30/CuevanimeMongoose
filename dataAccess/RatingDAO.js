const Rating= require('../models/Rating')
const DataAccessError = require('../errors/DataAccessError')
const NoDataFoundError = require('../errors/NoDataFoundError')

class RatingDAO{
    constructor(){};
    
    static async crearRating(ratingData,contentId){
        try {
            const rating=new Rating(ratingData,contentId)
            return await rating.save()
        } catch (error) {
            throw new DataAccessError("Se ha producido un problema al crear el rating de " +ratingData.contentType )
        }
    }

    static async obtenerRatingPorId(id){
        try {
            return await Rating.findById(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener el rating")
        }
    }

    static async actualizarRating(id,ratingData){
        try {
            return Rating.findByIdAndUpdate(id,ratingData,{new:true})
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al actualizar el rating")
        }
    }

    static async eliminarRating(id){
        try {
            return Rating.findByIdAndRemove(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al eliminar el rating")
        }
    }

    static async obtenerRatings(limit=10){
        try {
            return await Rating.find().limit(limit)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener todos los ratings")
        }
    }
}

module.exports = RatingDAO;