const mongoose = require('mongoose')

const ratingSchema= new mongoose.Schema({
    calificacion:{ 
        type: Number,
        required: true
    },
    idAnime:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Anime',
        require:false
    },
    idPelicula:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Pelicula',
        require:false
    },
    idUsuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        require:true
    }
})

module.exports=mongoose.model('Rating',ratingSchema)