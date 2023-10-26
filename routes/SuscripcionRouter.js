const express = require('express')
const router = express.Router()
const SuscripcionController = require('../controllers/SuscripcionController')

router.post('/', SuscripcionController.crearSuscripcion)
router.get('/:id', SuscripcionController.obtenerSuscripcionPorId)
router.put('/:id', SuscripcionController.actualizarSuscripcion)
router.delete('/:id', SuscripcionController.eliminarSuscripcion)
router.get('/', SuscripcionController.obtenerSuscripcions)

module.exports = router