const express = require('express')
const router = express.Router()
const AnimeController = require('../controllers/AnimeController')

router.post('/', AnimeController.crearAnime)
router.get('/:id', AnimeController.obtenerAnimePorId)
router.put('/:id', AnimeController.actualizarAnime)
router.delete('/:id', AnimeController.eliminarAnime)
router.get('/', AnimeController.obtenerAnimes)

module.exports = router