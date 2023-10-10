const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  idSuscripcion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Suscripcion',
    required: false,
  }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
