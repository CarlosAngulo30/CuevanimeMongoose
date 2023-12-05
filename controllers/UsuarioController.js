const UsuarioDAO = require("../dataAccess/UsuarioDAO");
const jwt = require("../middlewares/verify-jwt");

class UsuarioController {
  static async crearUsuario(req, res) {
    try {
      const usuarioData = req.body;
      const usuario = await UsuarioDAO.crearUsuario(usuarioData);
      res.status(201).json(usuario);
    } catch (error) {
      console.log(error.message);
      res.status(error.statusCode || 500).json({ message: error.message });
    }
  }

  static async login(req, res) {
    const usuarioLogin = req.body;
    try {
      const userLogin = await UsuarioDAO.login(usuarioLogin)
      if (!userLogin) {
        return res.status(400).json({
          message: "Credenciales incorrectas",
        });
      }
      const token = await jwt.generarToken(userLogin);
      res.cookie("authToken", token, { httpOnly: true });
      res.status(200).json({ user: userLogin });
    } catch (error) {
      console.log("ea");
      res.status(500).json({
        message: error.message,
      });
    }
  }

  static async logout(req, res) {
    try {
      res.clearCookie("authToken");
    } catch (e) {
      res.status(500).json("sucedio un error")
    }
  }

  static async obtenerUsuarioPorId(req, res, next) {
    try {
      const id = req.params.id;
      const usuario = await UsuarioDAO.obtenerUsuarioPorId(id);
      res.status(200).json(usuario);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async actualizarUsuario(req, res, next) {
    try {
      const id = req.params.id;
      const usuarioData = req.body;
      const usuario = await UsuarioDAO.actualizarUsuario(id, usuarioData);
      res.status(200).json({user: usuario});
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async eliminarUsuario(req, res, next) {
    try {
      const id = req.params.id;
      const usuario = await UsuarioDAO.eliminarUsuario(id);
      res.status(200).json({
        message: "Usuario " + usuario.nickname + " eliminado correctamente",
      });
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }

  static async obtenerUsuarios(req, res, next) {
    try {
      const limit = req.params.limit || 10;
      const usuarios = await UsuarioDAO.obtenerUsuarios(limit);
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(error.statusCode).json({ message: error.message });
    }
  }
}

module.exports = UsuarioController;
