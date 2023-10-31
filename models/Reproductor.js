const mongoose = require('mongoose')

const reproductorSchema= new mongoose.Schema({
    uri:{   
        type: String,
        required: true
    },
    nombreReproductor:{
        type: String,
        required: true,
    },
    contentType: { type: String, required: true },
    contentId: { type: mongoose.Schema.Types.ObjectId, refPath: 'contentType' }
})

module.exports=mongoose.model('Reproductor',reproductorSchema)