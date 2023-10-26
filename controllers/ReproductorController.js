const ReproductorDAO = require('../dataAccess/ReproductorDAO')
const {AppError} = require('../utils/appError')

class ReproductorController{
    static async crearReproductor(req, res, next){
        try {
            const {uri, nombreReproductor, idAnime, idPelicula} = req.body
            if(!uri || !nombreReproductor || !idAnime || idPelicula ){
                next(new AppError('Los campos uri, nombreReproductor, idAnime, idPelicula son obligatorios',500))
            }
            const reproductorData = {uri, nombreReproductor, idAnime, idPelicula}
            const reproductor = await ReproductorDAO.crearReproductor(reproductorData)
            res.status(201).json(reproductor)
        } catch (error) {
            next(new AppError('Error al crear el Reproductor',500))
        }
    }

    static async obtenerReproductorPorId(req, res, next){
        try {
            const id = req.params.id
            const reproductor = await ReproductorDAO.obtenerReproductorPorId(id)
            if(!reproductor){
                next(new AppError('No se encontro el Reproductor',404))
            }
            res.status(200).json(reproductor)
        } catch (error) {
            next(new AppError('No se logro obtener el Reproductor',404)) 
        }
    }

    static async actualizarReproductor(req, res, next){
        try {
            const id = req.params.id
            const reproductorData = req.body
            const reproductor = await ReproductorDAO.actualizarReproductor(id, reproductorData)
            if(!reproductor){
                next(new AppError('No se encontro el Reproductor',404))
            }
            res.status(200).json(Reproductor)
        } catch (error) {
            next(new AppError('Error al actualizar el Reproductor',500)) 
        }
    }

    static async eliminarReproductor(req, res, next){
        try {
            const id = req.params.id
            const reproductorData = req.body
            const reproductor = await ReproductorDAO.eliminarReproductor(id)
            if(!reproductor){
                next(new AppError('No se encontro el Reproductor',404))
            }
            res.status(200).json({message: 'Reproductor eliminado correctamente'})
        } catch (error) {
            next(new AppError('Error al eliminar el Reproductor',500)) 
        }
    }

    static async obtenerReproductors(req, res, next){
        try {
            const limit = req.params.limit || 10
            const reproductors = await ReproductorDAO.obtenerReproductors(limit)
            res.status(200).json(reproductors)
        } catch (error) {
            next(new AppError('No se logro obtener los Reproductores',500)) 
        }
    }
}

module.exports = ReproductorController