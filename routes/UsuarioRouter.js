const express = require('express')
const router = express.Router()
const UsuarioController = require('../controllers/UsuarioController')

router.post('/', UsuarioController.crearUsuario)
router.get('/:id', UsuarioController.obtenerUsuarioPorId)
router.put('/:id', UsuarioController.actualizarUsuario)
router.delete('/:id', UsuarioController.eliminarUsuario)
router.get('/', UsuarioController.obtenerUsuarios)

module.exports = router