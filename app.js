const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config({path: './variables.env'})
const db = require('./config/db')

db.conectar();

app.use(bodyParser.json())
app.use(morgan('combined'))

//Endpoints
const AnimeRouter = require('./routes/AnimeRouter')
app.use('/api/animes', AnimeRouter)
const PeliculaRouter = require('./routes/PeliculaRouter')
app.use('/api/peliculas', PeliculaRouter)
const RatingRouter = require('./routes/RatingRouter')
app.use('/api/ratings', RatingRouter)
const ReproductorRouter = require('./routes/ReproductorRouter')
app.use('/api/reproductors', ReproductorRouter)
const SuscripcionRouter = require('./routes/SuscripcionRouter')
app.use('/api/sucripcions', SuscripcionRouter)
const UsuarioRouter = require('./routes/UsuarioRouter')
app.use('/api/usuarios', UsuarioRouter)

app.use((req, res)=>{
    res.status(400).send("Ruta no encontrada")
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('Servidor corriendo en el puerto '+ port)
})