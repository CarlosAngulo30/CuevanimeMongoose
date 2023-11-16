const mongoose = require("mongoose");
const TemporadaDAO = require("../dataAccess/TemporadaDAO");

function validateCrearTemporada(req, res, next) {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Faltan datos" });
  }
  next();
}

function validateObtenerTemporadaById(req, res, next) {
  const temporada = TemporadaDAO.obtenerTemporada(
    new mongoose.Types.ObjectId(req.params.id)
  );
  if (!temporada) {
    return res
      .status(404)
      .json({ message: "No existe una temporada con ese id" });
  }
  next();
}

module.exports = {
  validateCrearTemporada,
  validateObtenerTemporadaById,
};
