const express = require("express");
const router = express.Router();
const TemporadaController = require("../controllers/TemporadaController");
const TemporadaMiddleware = require("../middlewares/validateTemporada");

router.post(
  "/",
  TemporadaMiddleware.validateCrearTemporada,
  TemporadaController.crearTemporada
);
router.get(
  "/:id",
  TemporadaMiddleware.validateObtenerTemporadaById,
  TemporadaController.obtenerTemporadaById
);
router.get("/", TemporadaController.obtenerTemporadas);

module.exports = router;
