const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')
const UsuarioMiddleware = require('../middlewares/validateUsuario')

router.post('/', UsuarioMiddleware.validateCrearUsuario, UsuarioController.crearUsuario)
router.get('/:id', UsuarioMiddleware.validateUsuarioId,UsuarioController.obtenerUsuarioPorId)
router.put('/:id', UsuarioMiddleware.validateActualizarUsuario,UsuarioController.actualizarUsuario)
router.delete('/:id', UsuarioMiddleware.validateUsuarioId,UsuarioController.eliminarUsuario)
router.get('/', UsuarioController.obtenerUsuarios)

module.exports = router