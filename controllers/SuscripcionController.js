const SuscripcionDAO = require('../dataAccess/SuscripcionDAO')
const {AppError} = require('../utils/appError')

class SuscripcionController{
    static async crearSuscripcion(req, res){
        try {
            const suscripcionData = {uri, nombreSuscripcion, idAnime, idPelicula}
            const suscripcion = await SuscripcionDAO.crearSuscripcion(suscripcionData)
            res.status(201).json(suscripcion)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerSuscripcionPorId(req, res){
        try {
            const id = req.params.id
            const suscripcion = await SuscripcionDAO.obtenerSuscripcionPorId(id)
            res.status(200).json(suscripcion)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async actualizarSuscripcion(req, res){
        try {
            const id = req.params.id
            const suscripcionData = req.body
            const suscripcion = await SuscripcionDAO.actualizarSuscripcion(id, suscripcionData)
            res.status(200).json(suscripcion)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async eliminarSuscripcion(req, res){
        try {
            const id = req.params.id
            const suscripcion = await SuscripcionDAO.eliminarSuscripcion(id)
            res.status(200).json({message: 'Suscripcion '+ suscripcion.tipo+' eliminada correctamente'})
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerSuscripcions(req, res){
        try {
            const limit = req.params.limit || 10
            const suscripcions = await SuscripcionDAO.obtenerSuscripcions(limit)
            res.status(200).json(suscripcions)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }
}

module.exports = SuscripcionController