const MediaContentDAO = require("../dataAccess/MediaContentDAO");

class MediaContentController {
  static async crearMediaContent(req, res) {
    try {
      const mediaContent = await MediaContentDAO.crearMediaContent(req.body);
      res.status(201).json(mediaContent);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async obtenerMediaContentById(req, res) {
    try {
      const mediaContent = await MediaContentDAO.obtenerMediaContent(
        req.params.id
      );
      res.status(200).json(mediaContent);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async actualizarMediaContent(req, res) {
    try {
      const mediaContent = await MediaContentDAO.actualizarMediaContent(
        req.params.id,
        req.body
      );
      res.status(200).json(mediaContent);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async obtenerMediaContentsByIdAnime(req, res) {
    console.log(req.params.id);
    try {
      const mediaContents = await MediaContentDAO.obtenerMediaContentsByIdAnime(
        req.params.id
      );
      res.status(200).json(mediaContents);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }
}

module.exports = MediaContentController;
