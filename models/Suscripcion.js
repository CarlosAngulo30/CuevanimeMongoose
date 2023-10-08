const mongoose = require('mongoose')

const suscripcionSchema= new mongoose.Schema({
    tipo:{String,
    required: true
    },
    costo:{
        type: Number,
        required: true,
    },
    fechaInicio:{
        type: Date,
        required:true
    },
    fechaFin:{
        type: Date,
        required:true
    }
})
module.exports=mongoose.model('Suscripcion',suscripcionSchema)