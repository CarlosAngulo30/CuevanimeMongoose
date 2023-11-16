const mongoose = require("mongoose");

const temporadaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Temporada", temporadaSchema);
