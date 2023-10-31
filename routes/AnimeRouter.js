const express = require('express')
const router = express.Router()
const AnimeController = require('../controllers/AnimeController')
const AnimeMiddleware = require('../middlewares/validateAnime')

router.post('/', AnimeMiddleware.validateCrearAnime, AnimeController.crearAnime)
router.get('/:id', AnimeMiddleware.validateAnimeId, AnimeController.obtenerAnimePorId)
router.put('/:id', AnimeMiddleware.validateActualizarAnime ,AnimeController.actualizarAnime)
router.delete('/:id',AnimeMiddleware.validateAnimeId , AnimeController.eliminarAnime)
router.get('/', AnimeController.obtenerAnimes)

module.exports = router