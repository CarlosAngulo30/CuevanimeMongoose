const mongoose = require('mongoose')

const usuarioSchema= new mongoose.Schema({
    nickname:{String,
    required: true
    },
    password:{
        type: STRING,
        required: true,
    },
    idSuscripcion:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Suscripcion',
        require:true
    }
})

module.exports=mongoose.model('Usuario',usuarioSchema)