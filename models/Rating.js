const mongoose = require('mongoose')

const ratingSchema= new mongoose.Schema({
    calificacion:{ 
        type: Number,
        required: true
    },
    contentType: { type: String, required: true },
    contentId: { type: mongoose.Schema.Types.ObjectId, refPath: 'contentType' },
    idUsuario:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Usuario',
        require:true
    }
})

module.exports=mongoose.model('Rating',ratingSchema)
