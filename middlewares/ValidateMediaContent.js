const mongoose = require("mongoose");
const MediaContentDAO = require("../dataAccess/MediaContentDAO");
const AnimeDAO = require("../dataAccess/AnimeDAO");

function validateCrearMediaContent(req, res, next) {
  const { idAnime, title, tipo, descripcion, url, numeroCapitulo, temporada } =
    req.body;
  if (
    !idAnime ||
    !title ||
    !tipo ||
    !descripcion ||
    !url ||
    !numeroCapitulo ||
    !temporada
  ) {
    return res
      .status(400)
      .json({ message: "Datos incompletos para crear un media content" });
  }
  next();
}

function validateObtenerMediaContentById(req, res, next) {
  try {
    const mediaContent = MediaContentDAO.obtenerMediaContent(
      new mongoose.Types.ObjectId(req.params.id)
    );
    if (!mediaContent) {
      return res
        .status(404)
        .json({ message: "No existe un media content con ese id" });
    }
  } catch (error) {
    return res.status(404).json({ message: "El id no es valido" });
  }
  next();
}

function validateActualizarMediaContent(req, res, next) {
  try {
    const mediaContent = MediaContentDAO.obtenerMediaContent(
      new mongoose.Types.ObjectId(req.params.id)
    );
    if (!mediaContent) {
      return res
        .status(404)
        .json({ message: "No existe un media content con ese id" });
    }
  } catch (error) {
    return res.status(404).json({ message: "El id no es valido" });
  }
  const { anime, title, tipo, descripcion, url, numeroCapitulo, temporada } =
    req.body;
  if (
    !anime ||
    !title ||
    !tipo ||
    !descripcion ||
    !url ||
    !numeroCapitulo ||
    !temporada
  ) {
    return res
      .status(400)
      .json({ message: "Datos incompletos para actualizar un media content" });
  }
  next();
}

function validateObtenerMediaContentsByIdAnime(req, res, next) {
  try {
    const idAnime = new mongoose.Types.ObjectId(req.params.id);
    const anime = AnimeDAO.obtenerAnimePorId(
      new mongoose.Types.ObjectId(idAnime)
    );
    if (!anime) {
      return res.status(404).json({ message: "No existe un anime con ese id" });
    }
  } catch (error) {
    return res.status(404).json({ message: "El id no es valido" });
  }
  next();
}

module.exports = {
  validateCrearMediaContent,
  validateObtenerMediaContentById,
  validateActualizarMediaContent,
  validateObtenerMediaContentsByIdAnime,
};
