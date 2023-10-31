const mongoose = require("mongoose")
const PeliculaDAO = require('../dataAccess/PeliculaDAO')

function validateCrearPelicula(req, res, next){
    const {nombre, sinopsis} = req.body
    if(!nombre || !sinopsis ){
        return res.status(400).json({message: "Los campos nombre, sinopsis son obligatorios"})
    } 
    next()
}

function validatePeliculaId(req, res, next){
    try {
        const pelicula = PeliculaDAO.obtenerPeliculaPorId(new mongoose.Types.ObjectId(req.params.id));
        if(!pelicula){
            return res.status(404).json({
                message: 'No existe Pelicula con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateActualizarPelicula(req, res, next){
    try {
        const pelicula = PeliculaDAO.obtenerPeliculaPorId(new mongoose.Types.ObjectId(req.params.id));
        if(!pelicula){
            return res.status(404).json({
                message: 'No existe Pelicula con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    const {nombre, sinopsis} = req.body
    if(!nombre || !sinopsis ){
        return res.status(400).json({message: "Los campos nombre, sinopsis son obligatorios"})
    } 
    next()
}


module.exports = {
    validateCrearPelicula,
    validateActualizarPelicula,
    validatePeliculaId
}