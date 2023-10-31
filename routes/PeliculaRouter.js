const express = require('express')
const router = express.Router()
const PeliculaController = require('../controllers/PeliculaController')
const PeliculaMiddleware = require('../middlewares/ValidatePelicula')

router.post('/', PeliculaMiddleware.validateCrearPelicula, PeliculaController.crearPelicula)
router.get('/:id', PeliculaMiddleware.validatePeliculaId, PeliculaController.obtenerPeliculaPorId)
router.put('/:id', PeliculaMiddleware.validateActualizarPelicula, PeliculaController.actualizarPelicula)
router.delete('/:id', PeliculaMiddleware.validatePeliculaId, PeliculaController.eliminarPelicula)
router.get('/', PeliculaController.obtenerPeliculas)

module.exports = router