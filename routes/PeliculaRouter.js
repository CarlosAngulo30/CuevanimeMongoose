const express = require('express')
const router = express.Router()
const PeliculaController = require('../controllers/PeliculaController')

router.post('/', PeliculaController.crearPelicula)
router.get('/:id', PeliculaController.obtenerPeliculaPorId)
router.put('/:id', PeliculaController.actualizarPelicula)
router.delete('/:id', PeliculaController.eliminarPelicula)
router.get('/', PeliculaController.obtenerPeliculas)

module.exports = router