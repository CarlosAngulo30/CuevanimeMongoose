const express = require('express')
const router = express.Router()
const RatingController = require('../controllers/RatingController')

router.post('/:id', RatingController.crearRatingAnime)
router.post('/:id', RatingController.crearRatingPelicula)
router.get('/:id', RatingController.obtenerRatingPorId)
router.put('/:id', RatingController.actualizarRating)
router.delete('/:id', RatingController.eliminarRating)
router.get('/', RatingController.obtenerRatings)

module.exports = router