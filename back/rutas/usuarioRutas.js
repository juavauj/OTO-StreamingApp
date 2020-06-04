const express = require('express');
const UsuarioControl = require('../control/usuarioControl');
// importar el paquete connect
const multipart = require('connect-multiparty');

const subirImgDirectorio = multipart({uploadDir: './archivos/usuarios'});



var api = express.Router();

// Rutas Registrar Usuario -> angular url hhtp:/localhost:3000/api/
api.post('/registro', UsuarioControl.registrarUsuario);

// Ruta Login
api.post('/login', UsuarioControl.login);

// Ruta Actualizar Usuario
api.put('/actualizar/:id', UsuarioControl.actualizarUsuario);

//ruta subir imagen usuario
api.put('/subirImagen/:id', subirImgDirectorio, UsuarioControl.subirImagen);

//ruta mostrara imagen
api.get('/obtenerImagen/:imageFile', UsuarioControl.mostrarArchivo); 

// Exportar el módulo
module.exports = api;