const Anime = require('../models/Anime')
const DataAccessError = require('../errors/dataAccessError')
const NoDataFoundError = require('../errors/NoDataFoundError')

class AnimeDAO{
    constructor(){};

    static async crearAnime(animeData){
        try {
            const anime=new Anime(animeData)
            return await anime.save()
        } catch (error) {
            throw new DataAccessError("Se ha producido un problema al crear el anime")
        }
    }

    static async obtenerAnimePorId(id){
        try {
            return await Anime.findById(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener el anime")
        }
    }

    static async actualizarAnime(id,animeData){
        try {
            return Anime.findByIdAndUpdate(id,animeData,{new:true})
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al actualizar el anime")
        }
    }

    static async eliminarAnime(id){
        try {
            return Anime.findByIdAndRemove(id)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al eliminar el anime")
        }
    }

    static async obtenerAnimes(limit=10){
        try {
            return await Anime.find().limit(limit)
        } catch (error) {
            throw new NoDataFoundError("Se ha producido un problema al obtener todos los animes")
        }
    }
}

module.exports = AnimeDAO