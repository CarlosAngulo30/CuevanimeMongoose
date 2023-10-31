const mongoose = require("mongoose")
const ReproductorDAO = require('../dataAccess/ReproductorDAO')
const PeliculaDAO = require('../dataAccess/PeliculaDAO')
const AnimeDAO = require('../dataAccess/AnimeDAO')

function validateCrearReproductor(req, res, next){
    const {uri, nombreReproductor, contentType} = req.body
    if(!uri || !nombreReproductor || !contentType ){
        return res.status(400).json({message: "Los campos uri, nombreReproductor, contentType son obligatorios"})
    }
    try {
        if(contentType === 'Anime'){
            const anime = AnimeDAO.obtenerAnimePorId(new mongoose.Types.ObjectId(req.params.id))
            if(!anime){
                return res.status(404).json({
                    message: 'No existe anime con ese id'
                })
            }
        } else if(contentType === "Pelicula") {
            const anime = PeliculaDAO.obtenerPeliculaPorId(new mongoose.Types.ObjectId(req.params.id))
            if(!anime){
                return res.status(404).json({
                    message: 'No existe pelicula con ese id'
                })
            }
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateReproductorId(req, res, next){
    try {
        const reproductor = ReproductorDAO.obtenerReproductorPorId(new mongoose.Types.ObjectId(req.params.id));
        if(!reproductor){
            return res.status(404).json({
                message: 'No existe Reproductor con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateActualizarReproductor(req, res, next){
    try {
        const reproductor = ReproductorDAO.obtenerReproductorPorId(new mongoose.Types.ObjectId(req.params.id));
        if(!reproductor){
            return res.status(404).json({
                message: 'No existe Reproductor con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    const {uri, nombreReproductor, contentType, contentId} = req.body
    if(!uri || !nombreReproductor || !contentType || !contentId ){
        return res.status(400).json({message: "Los campos uri, nombreReproductor, contentType y contentId son obligatorios"})
    }
    next()
}


module.exports = {
    validateCrearReproductor,
    validateActualizarReproductor,
    validateReproductorId
}