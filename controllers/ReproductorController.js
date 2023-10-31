const ReproductorDAO = require('../dataAccess/ReproductorDAO')

class ReproductorController{
    static async crearReproductor(req, res){
        try {
            const reproductorData = req.body
            const reproductor = await ReproductorDAO.crearReproductor(reproductorData)
            res.status(201).json(reproductor)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerReproductorPorId(req, res){
        try {
            const id = req.params.id
            const reproductor = await ReproductorDAO.obtenerReproductorPorId(id)
            res.status(200).json(reproductor)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async actualizarReproductor(req, res ){
        try {
            const id = req.params.id
            const reproductorData = req.body
            const reproductor = await ReproductorDAO.actualizarReproductor(id, reproductorData)
            res.status(200).json(reproductor)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async eliminarReproductor(req, res ){
        try {
            const id = req.params.id
            const reproductor = await ReproductorDAO.eliminarReproductor(id)
            res.status(200).json({message: 'Reproductor '+reproductor.nombreReproductor+' eliminado correctamente'})
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }

    static async obtenerReproductors(req, res ){
        try {
            const limit = req.params.limit || 10
            const reproductors = await ReproductorDAO.obtenerReproductors(limit)
            res.status(200).json(reproductors)
        } catch (error) {
            res.status(error.statusCode).json({message:error.message})
        }
    }
}

module.exports = ReproductorController