const MediaContent = require("../models/MediaContent");
const DataAccessError = require("../errors/DataAccessError");
const NoDataFoundError = require("../errors/NoDataFoundError");
const mongoose = require("mongoose");

class MediaContentDAO {
  constructor() {}

  static async crearMediaContent(mediaContentData) {
    try {
      const mediaContent = new MediaContent(mediaContentData);
      return await mediaContent.save();
    } catch (error) {
      throw new DataAccessError(
        "Se ha producido un problema al crear el mediaContent"
      );
    }
  }

  static async obtenerMediaContent(id) {
    try {
      return await MediaContent.findById(id);
    } catch (error) {
      throw new DataAccessError(
        "Se ha producido un problema al obtener el mediaContent"
      );
    }
  }

  static async actualizarMediaContent(id, mediaContentData) {
    try {
      return MediaContent.findByIdAndUpdate(id, mediaContentData, {
        new: true,
      });
    } catch (error) {
      throw new NoDataFoundError("No se ha encontrado el mediaContent");
    }
  }

  static async obtenerMediaContentsByIdAnime(id) {
    try {
      return await MediaContent.find({
        idAnime: new mongoose.Types.ObjectId(id),
      });
    } catch (error) {
      throw new NoDataFoundError(
        "Se ha producido un problema al obtener los mediaContents" + error
      );
    }
  }
}

module.exports = MediaContentDAO;
