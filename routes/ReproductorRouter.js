const express = require('express')
const router = express.Router()
const ReproductorController = require('../controllers/ReproductorController')
const ReproductorMiddleware = require('../middlewares/ValidateReproductor')

router.post('/', ReproductorMiddleware.validateCrearReproductor, ReproductorController.crearReproductor)
router.get('/:id', ReproductorMiddleware.validateReproductorId, ReproductorController.obtenerReproductorPorId)
router.put('/:id', ReproductorMiddleware.validateActualizarReproductor, ReproductorController.actualizarReproductor)
router.delete('/:id',ReproductorMiddleware.validateReproductorId, ReproductorController.eliminarReproductor)
router.get('/', ReproductorController.obtenerReproductors)

module.exports = router