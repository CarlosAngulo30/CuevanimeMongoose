const SuscripcionDAO = require('../dataAccess/SuscripcionDAO')
const {AppError} = require('../utils/appError')

class SuscripcionController{
    static async crearSuscripcion(req, res, next){
        try {
            const {tipo, costo, fechaInicio, fechaFin} = req.body
            if(!tipo || !costo || !fechaInicio || fechaFin ){
                next(new AppError('Los campos tipo, costo, fechaInicio, fechaFin son obligatorios',500))
            }
            const suscripcionData = {uri, nombreSuscripcion, idAnime, idPelicula}
            const suscripcion = await SuscripcionDAO.crearSuscripcion(suscripcionData)
            res.status(201).json(suscripcion)
        } catch (error) {
            next(new AppError('Error al crear la Suscripcion',500))
        }
    }

    static async obtenerSuscripcionPorId(req, res, next){
        try {
            const id = req.params.id
            const suscripcion = await SuscripcionDAO.obtenerSuscripcionPorId(id)
            if(!suscripcion){
                next(new AppError('No se encontro la Suscripcion',404))
            }
            res.status(200).json(suscripcion)
        } catch (error) {
            next(new AppError('No se logro obtener la Suscripcion',404)) 
        }
    }

    static async actualizarSuscripcion(req, res, next){
        try {
            const id = req.params.id
            const suscripcionData = req.body
            const suscripcion = await SuscripcionDAO.actualizarSuscripcion(id, suscripcionData)
            if(!suscripcion){
                next(new AppError('No se encontro la Suscripcion',404))
            }
            res.status(200).json(suscripcion)
        } catch (error) {
            next(new AppError('Error al actualizar la Suscripcion',500)) 
        }
    }

    static async eliminarSuscripcion(req, res, next){
        try {
            const id = req.params.id
            const suscripcionData = req.body
            const suscripcion = await SuscripcionDAO.eliminarSuscripcion(id)
            if(!suscripcion){
                next(new AppError('No se encontro la Suscripcion',404))
            }
            res.status(200).json({message: 'Suscripcion eliminada correctamente'})
        } catch (error) {
            next(new AppError('Error al eliminar la Suscripcion',500)) 
        }
    }

    static async obtenerSuscripcions(req, res, next){
        try {
            const limit = req.params.limit || 10
            const suscripcions = await SuscripcionDAO.obtenerSuscripcions(limit)
            res.status(200).json(suscripcions)
        } catch (error) {
            next(new AppError('No se logro obtener las Suscripciones',500)) 
        }
    }
}

module.exports = SuscripcionController