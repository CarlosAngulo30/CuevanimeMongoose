const mongoose = require('mongoose')

const reproductorSchema= new mongoose.Schema({
    uri:{String,
    required: true
    },
    nombreReproductor:{
        type: String,
        required: true,
    },
    idAnime:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Anime',
        require:true
    },
    idPelicula:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pelicula',
        require:true
    }
})

module.exports=mongoose.model('Reproductor',reproductorSchema)