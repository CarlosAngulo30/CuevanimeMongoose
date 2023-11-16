const express = require("express");
const router = express.Router();
const MediaContentController = require("../controllers/MediaContentController");
const MediaContentMiddleware = require("../middlewares/ValidateMediaContent");

router.post(
  "/",
  MediaContentMiddleware.validateCrearMediaContent,
  MediaContentController.crearMediaContent
);
router.get(
  "/:id",
  MediaContentMiddleware.validateObtenerMediaContentById,
  MediaContentController.obtenerMediaContentById
);
router.put(
  "/:id",
  MediaContentMiddleware.validateActualizarMediaContent,
  MediaContentController.actualizarMediaContent
);
router.get(
  "/:id",
  MediaContentMiddleware.validateObtenerMediaContentsByIdAnime,
  MediaContentController.obtenerMediaContentsByIdAnime
);

module.exports = router;
