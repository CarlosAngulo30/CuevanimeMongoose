const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')
const UsuarioMiddleware = require('../middlewares/validateUsuario')

router.post('/', UsuarioMiddleware.validateCrearUsuario, UsuarioController.crearUsuario)
router.post('/login', UsuarioMiddleware.validateLogin, UsuarioController.login)
router.get('/:id', UsuarioMiddleware.validateUsuarioId,UsuarioController.obtenerUsuarioPorId)
router.put('/:id', UsuarioMiddleware.validateActualizarUsuario,UsuarioController.actualizarUsuario)
router.delete('/:id', UsuarioMiddleware.validateUsuarioId,UsuarioController.eliminarUsuario)
router.get('/', UsuarioController.obtenerUsuarios)
router.get('/logout',UsuarioController.logout)

module.exports = router