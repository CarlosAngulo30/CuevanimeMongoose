const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  imagen: {
    type: String,
    required: false,
  },
  idSuscripcion: {
    type: String,
    required: false,
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
