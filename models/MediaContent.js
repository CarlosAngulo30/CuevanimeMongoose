const mongoose = require("mongoose");

const mediaContentSchema = new mongoose.Schema({
  idAnime: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Anime",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["episodio", "pelicula"],
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  url: [
    {
      type: String,
      required: true,
    },
  ],
  numeroCapitulo: {
    type: Number,
    required: true,
  },
  temporada: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Temporada",
    required: true,
  },
});

module.exports = mongoose.model("MediaContent", mediaContentSchema);
