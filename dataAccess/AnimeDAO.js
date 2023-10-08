const Anime= require('../models/Anime')

class AnimeDAO{
    constructor(){};

    static async crearAnime(animeData){
        try {
            const anime=new Anime(animeData)
            return await anime.save()
        } catch (error) {
            throw error
        }
    }

    static async obtenerAnimePorId(id){
        try {
            return await Anime.findById(id)
        } catch (error) {
            throw error
        }
    }

    static async actualizarAnime(id,animeData){
        try {
            return Anime.findByIdAndUpdate(id,animeData,{new:true})
        } catch (error) {
            throw error
        }
    }

    static async eliminarAnime(id){
        try {
            return Anime.findByIdAndRemove(id)
        } catch (error) {
            throw error
        }
    }

    static async obtenerAnimes(limit=10){
        try {
            return await Anime.find().limit(limit)
        } catch (error) {
            throw error
        }
    }
}

module.exports = AnimeDAO;