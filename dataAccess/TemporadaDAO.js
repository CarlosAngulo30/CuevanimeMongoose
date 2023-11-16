const Temporada = require("../models/Temporada");
const DataAccessError = require("./DataAccessError");
const NoDataFoundError = require("./NoDataFoundError");

class TemporadaDAO {
  constructor() {}

  static async crearTemporada(title) {
    try {
      const temporada = new Temporada(title);
      return await temporada.save();
    } catch (error) {
      throw new DataAccessError(
        "Se ha producido un problema al crear la temporada"
      );
    }
  }

  static async obtenerTemporada(id) {
    try {
      return await Temporada.findById(id);
    } catch (error) {
      throw new NoDataFoundError(
        "Se ha producido un problema al obtener la temporada"
      );
    }
  }

  static async obtenerTemporadas() {
    try {
      return await Temporada.find();
    } catch (error) {
      throw new NoDataFoundError(
        "Se ha producido un problema al obtener las temporadas"
      );
    }
  }
}

module.exports = TemporadaDAO;
