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
  idSuscripcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Suscripcion',
    required: false,
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
