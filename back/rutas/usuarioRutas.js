const express = require('express');
const UsuarioControl = require('../control/usuarioControl');

var api = express.Router();

// Rutas Registrar Usuario -> angular url hhtp:/localhost:3000/api/
api.post('/registro', UsuarioControl.registrarUsuario);

// Ruta Login
api.post('/login', UsuarioControl.login);

// Ruta Actualizar Usuario

// Exportar el módulo
module.exports = api;