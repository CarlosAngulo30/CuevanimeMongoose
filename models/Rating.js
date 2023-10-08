const mongoose = require('mongoose')

const ratingSchema= new mongoose.Schema({
    calificacion:{Number,
    required: true
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
    },
    idUsuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        require:true
    }
})

module.exports=mongoose.model('Rating',ratingSchema)
