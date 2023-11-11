const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  sinopsis: {
    type: String,
    required: true,
  },
  temporada: {
    type: Number,
    required: true,
  },
  numerocapitulo: {
    type: Number,
    required: true,
  },
  imagenes: {
    bannerHorizontal: {
      type: String,
      required: true,
    },
    card: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("Anime", animeSchema);
