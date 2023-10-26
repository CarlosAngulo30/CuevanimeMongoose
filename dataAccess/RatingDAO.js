const Rating= require('../models/Rating')

class RatingDAO{
    constructor(){};
    
    static async crearRatingAnime(ratingData,idAnime){
        try {
            const rating=new Rating(ratingData,idAnime)
            return await rating.save()
        } catch (error) {
            throw error
        }
    }

    static async crearRatingPelicula(ratingData,idPelicula){
        try {
            const rating=new Rating(ratingData,idPelicula)
            return await rating.save()
        } catch (error) {
            throw error
        }
    }

    static async obtenerRatingPorId(id){
        try {
            return await Rating.findById(id)
        } catch (error) {
            throw error
        }
    }

    static async actualizarRating(id,ratingData){
        try {
            return Rating.findByIdAndUpdate(id,ratingData,{new:true})
        } catch (error) {
            throw error
        }
    }

    static async eliminarRating(id){
        try {
            return Rating.findByIdAndRemove(id)
        } catch (error) {
            throw error
        }
    }

    static async obtenerRatings(limit=10){
        try {
            return await Rating.find().limit(limit)
        } catch (error) {
            throw error
        }
    }
}

module.exports = RatingDAO;