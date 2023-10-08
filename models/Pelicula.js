const mongoose = require('mongoose')

const peliculaSchema= new mongoose.Schema({
    nombre:{String,
    required: true
    },
    sinopsis:{
        type: String,
        required: true,
    },
    calificacionPromedio:{
        type: Number,
        required:true
    }
})

module.exports=mongoose.model('Pelicula',peliculaSchema)
