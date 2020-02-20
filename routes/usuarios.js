const express = require ('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

const UsuariosController = require("../controllers/usuarios-controller")

router.post('/cadastro', UsuariosController.cadastrarUsuario);

router.post('/login', UsuariosController.usuarioLogin);

module.exports = router;