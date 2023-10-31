const express = require('express')
const router = express.Router()
const RatingController = require('../controllers/RatingController')
const RatingMiddleware = require('../middlewares/validateRating')

router.post('/:id', RatingMiddleware.validateCrearRatingAnime, RatingController.crearRatingAnime)
router.post('/:id', RatingMiddleware.validateCrearRatingPelicula, RatingController.crearRatingPelicula)
router.get('/:id', RatingMiddleware.validateRatingId, RatingController.obtenerRatingPorId)
router.put('/:id', RatingMiddleware.validateActualizarRating, RatingController.actualizarRating)
router.delete('/:id',RatingMiddleware.validateRatingId, RatingController.eliminarRating)
router.get('/', RatingController.obtenerRatings)

module.exports = router