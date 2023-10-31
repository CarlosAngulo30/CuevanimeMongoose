const express = require('express')
const router = express.Router()
const ReproductorController = require('../controllers/ReproductorController')
const ReproductorMiddleware = require('../middlewares/ValidateReproductor')

router.post('/', ReproductorMiddleware.validateCrearReproductorAnime, ReproductorController.crearReproductor)
router.get('/:id', ReproductorController.obtenerReproductorPorId)
router.put('/:id', ReproductorController.actualizarReproductor)
router.delete('/:id', ReproductorController.eliminarReproductor)
router.get('/', ReproductorController.obtenerReproductors)

module.exports = router