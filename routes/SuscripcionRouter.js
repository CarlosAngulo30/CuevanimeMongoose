const express = require('express')
const router = express.Router()
const SuscripcionController = require('../controllers/SuscripcionController')
const SuscripcionMiddleware = require('../middlewares/ValidateSuscripcion')

router.post('/', SuscripcionMiddleware.validateCrearSuscripcion, SuscripcionController.crearSuscripcion)
router.get('/:id', SuscripcionMiddleware.validateSuscripcionId, SuscripcionController.obtenerSuscripcionPorId)
router.put('/:id', SuscripcionMiddleware.validateActualizarSuscripcion, SuscripcionController.actualizarSuscripcion)
router.delete('/:id', SuscripcionMiddleware.validateSuscripcionId, SuscripcionController.eliminarSuscripcion)
router.get('/', SuscripcionController.obtenerSuscripcions)

module.exports = router