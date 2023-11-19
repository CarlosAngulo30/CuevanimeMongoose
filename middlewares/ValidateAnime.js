const mongoose = require("mongoose");
const animeDAO = require("../dataAccess/AnimeDAO");

function validateCrearAnime(req, res, next) {
  const { nombre, sinopsis, genero, imagenes } = req.body;
  if (!nombre || !sinopsis || !genero || !imagenes) {
    return res.status(400).json({
      message: "Los campos nombre, sinopsis e imagenes son obligatorios",
    });
  }
  next();
}

function validateAnimeId(req, res, next) {
  try {
    const anime = animeDAO.obtenerAnimePorId(
      new mongoose.Types.ObjectId(req.params.id)
    );
    if (!anime) {
      return res.status(404).json({
        message: "No existe anime con ese id",
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "El id no es valido" });
  }
  next();
}

function validateActualizarAnime(req, res, next) {
  try {
    const anime = animeDAO.obtenerAnimePorId(
      new mongoose.Types.ObjectId(req.params.id)
    );
    if (!anime) {
      return res.status(404).json({
        message: "No existe anime con ese id",
      });
    }
  } catch (error) {
    return res.status(400).json({ message: "El id no es valido" });
  }
  const { nombre, sinopsis, imagenes } = req.body;
  if (!nombre || !sinopsis || !imagenes) {
    return res.status(400).json({
      message: "Los campos nombre, sinopsis e imagenes son obligatorios",
    });
  }
  next();
}

module.exports = {
  validateCrearAnime,
  validateActualizarAnime,
  validateAnimeId,
};
