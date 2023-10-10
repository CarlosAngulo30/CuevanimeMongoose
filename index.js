// Importar módulos DAO para cada entidad
const UsuarioDAO = require('./dataAccess/UsuarioDAO');
const AnimeDAO = require('./dataAccess/AnimeDAO');
const RatingDAO = require('./dataAccess/RatingDAO');
const ReproductorDAO = require('./dataAccess/ReproductorDAO');
const PeliculaDAO = require('./dataAccess/PeliculaDAO');
const SuscripcionDAO = require('./dataAccess/SuscripcionDAO');
const Usuario = require('./models/Usuario');
const Anime = require('./models/Anime');
const Pelicula = require('./models/Pelicula');
const Reproductor = require('./models/Reproductor');
const Suscripcion = require('./models/Suscripcion');
const Rating = require('./models/Rating');
const db = require('./config/db');

db.conectar()
  .then(async () => {

    const suscripcion = new Suscripcion({
      tipo: 'mensual',
      costo: 340,
      fechaInicio: new Date('2023-01-01'),
      fechaFin: new Date('2023-02-01'),
    });
    const anime = new Anime({
      nombre: 'Naruto',
      sinopsis: 'Niño chackra',
      calificacionPromedio: 2,
      temporada: 1,
      numerocapitulo: 1,
    });

    const nuevoUsuario = new Usuario({
      nickname: 'EA',
      password: '123456',
      idSuscripcion: '6524aef849d964e62f9e25ba'
    });

    const pelicula = new Pelicula({
      nombre: 'Dragon ball super',
      sinopsis: 'broly vs kokun',
      calificacionPromedio: 3,
    });

    const rating = new Rating({
      calificacion: 5,
      idAnime: '6524b03be7058f1f92570d36',
      idPelicula: '6524b03be7058f1f92570d38',
      idUsuario: '6524b03be7058f1f92570d37'
    });
    
    const reproductor = new Reproductor({
      uri: 'ea.com',
      nombreReproductor: 'animeflv',
      idAnime: '6524b03be7058f1f92570d36',
      idPelicula: '6524b03be7058f1f92570d38',
    });
    try {
      await SuscripcionDAO.crearSuscripcion(suscripcion);
    } catch (error) {
      console.error('Error al crear suscripcion:', error);
    }

    try {
      await UsuarioDAO.crearUsuario(nuevoUsuario);
    } catch (error) {
      console.error('Error al crear usuario:', error);
    }

    try {
      await AnimeDAO.crearAnime(anime);
    } catch (error) {
      console.error('Error al crear anime:', error);
    }

    try {
      await PeliculaDAO.crearPelicula(pelicula);
    } catch (error) {
      console.error('Error al crear pelicula:', error);
    }

    try {
      await ReproductorDAO.crearReproductor(reproductor);
    } catch (error) {
      console.error('Error al crear reproductor:', error);
    }

    try {
      await RatingDAO.crearRatingAnime(rating);
    } catch (error) {
      console.error('Error al crear reproductor:', error);
    }

  }).catch(err => {
    console.error('Error en la conexión a la base de datos:', err);
  })