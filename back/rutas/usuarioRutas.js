const express = require('express');
const UsuarioControl = require('../control/usuarioControl');
// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
// A traves de connect multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const subirImgDirectorio = multipart({uploadDir: './archivos/usuarios'});

var api = express.Router();

// Rutas Registrar Usuario -> angular url hhtp:/localhost:3000/api/
api.post('/registro', UsuarioControl.registrarUsuario);

// Ruta Login
api.post('/login', UsuarioControl.login);

// Ruta Actualizar Usuario
api.put('/actualizar-usuario/:id', UsuarioControl.actualizarUsuario);

// Ruta Subir Imagen Usuario
api.put('/subirImagen/:id', subirImgDirectorio, UsuarioControl.subirImg);

// Ruta mostrar Imagen Usuario
api.get('/obtenerImagen/:imageFile', UsuarioControl.mostrarArchivo);

// Exportar el módulo
module.exports = api;