const mongoose = require("mongoose")
const SuscripcionDAO = require('../dataAccess/SuscripcionDAO')

function validateCrearSuscripcion(req, res, next){
    const {tipo, costo, fechaInicio, fechaFin} = req.body
    if(!tipo || !costo || !fechaInicio || fechaFin ){
        return res.status(400).json({message: "Los campos tipo, costo, fechaInicio, fechaFin son obligatorios"})
    }
    next()
}

function validateSuscripcionId(req, res, next){
    try {
        const suscripcion = SuscripcionDAO.obtenerSuscripcionPorId(new mongoose.Types.ObjectId(req.params.id));
        if(!suscripcion){
            return res.status(404).json({
                message: 'No existe Suscripcion con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    next()
}

function validateActualizarSuscripcion(req, res, next){
    try {
        const suscripcion = SuscripcionDAO.obtenerSuscripcionPorId(new mongoose.Types.ObjectId(req.params.id));
        if(!suscripcion){
            return res.status(404).json({
                message: 'No existe Suscripcion con ese id'
            })
        }
    } catch (error) {
        return res.status(400).json({message: "El id no es valido"})
    }
    const {tipo, costo, fechaInicio, fechaFin} = req.body
    if(!tipo || !costo || !fechaInicio || fechaFin ){
        return res.status(400).json({message: "Los campos tipo, costo, fechaInicio, fechaFin son obligatorios"})
    }
    next()
}


module.exports = {
    validateCrearSuscripcion,
    validateActualizarSuscripcion,
    validateSuscripcionId
}