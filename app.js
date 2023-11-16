const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./variables.env" });
const db = require("./config/db");
const jwt = require("./middlewares/verify-jwt");
const cors = require("cors");

db.conectar();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));
//Endpoints
const AnimeRouter = require("./routes/AnimeRouter");
app.use("/api/animes", AnimeRouter);
const MediaContentRouter = require("./routes/MediaContentRouter");
app.use("/api/mediaContents", MediaContentRouter);
const TemporadaRouter = require("./routes/TemporadaRouter");
app.use("/api/temporadas", TemporadaRouter);
const PeliculaRouter = require("./routes/PeliculaRouter");
app.use("/api/peliculas", jwt.verifyToken, PeliculaRouter);
const RatingRouter = require("./routes/RatingRouter");
app.use("/api/ratings", jwt.verifyToken, RatingRouter);
const ReproductorRouter = require("./routes/ReproductorRouter");
app.use("/api/reproductors", jwt.verifyToken, ReproductorRouter);
const SuscripcionRouter = require("./routes/SuscripcionRouter");
app.use("/api/sucripcions", jwt.verifyToken, SuscripcionRouter);
const UsuarioRouter = require("./routes/UsuarioRouter");
app.use("/api/usuarios", UsuarioRouter);

app.use((req, res) => {
  res.status(400).send("Ruta no encontrada");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto " + port);
});
