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
  genero: {
    type: String,
    required: true,
  },
  temporadas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Temporada",
      required: false,
    },
  ],
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
