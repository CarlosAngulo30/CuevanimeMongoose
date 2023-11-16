const TemporadaDAO = require("../dataAccess/TemporadaDAO");

class TemporadaController {
  static async crearTemporada(req, res) {
    try {
      const temporada = await TemporadaDAO.crearTemporada(req.body);
      res.status(201).json(temporada);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async obtenerTemporadaById(req, res) {
    try {
      const temporada = await TemporadaDAO.obtenerTemporada(req.params.id);
      res.status(200).json(temporada);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async obtenerTemporadas(req, res) {
    try {
      const limit = req.params.limit || 20;
      const temporadas = await TemporadaDAO.obtenerTemporadas();
      res.status(200).json(temporadas);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }
}

module.exports = TemporadaController;
