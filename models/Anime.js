const mongoose = require('mongoose')

const animeSchema= new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    sinopsis:{
        type: String,
        required: true,
    },
    calificacionPromedio:{
        type: Number,
        required:true
    },
    temporada:{
        type: Number,
        required:true
    },
    numerocapitulo:{
        type: Number,
        required:true
    }
})

module.exports=mongoose.model('Anime',animeSchema)