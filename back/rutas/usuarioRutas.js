const express = require('express');
const UsuarioControl = require('../control/usuarioControl');

// Importar el paquete connect-multiparty
const multipart = require('connect-multiparty');
// A traves de connect multiparty, apuntamos a la carpeta que deseemos en que se guarden los archivos
const subirImgDirectorio = multipart({uploadDir: './archivos/usuarios'});

var api = express.Router();

// Rutas Registrar Usuario -> angular url hhtp:/localhost:3000/api/
api.post('/registro', UsuarioControl.registrarUsuario);//check x2

// Ruta Login
api.post('/login', UsuarioControl.login);//check x2

// Ruta Actualizar Usuario
api.put('/actualizar-usuario/:id', UsuarioControl.actualizarUsuario);//check x2

// Ruta Subir Imagen Usuario
api.put('/subirImagenUsuario/:id', subirImgDirectorio, UsuarioControl.subirImg);//check x2

// Ruta mostrar Imagen Usuario
api.get('/obtenerImgUsuario/:imageFile', UsuarioControl.mostrarArchivo);//check x2

// Ruta mostara usuarios
api.get('/obtenerUsuarios', UsuarioControl.obtenerUsuarios);//check

// Ruta permitira buscar usuarios
api.get('/buscarUsuarios/:busqueda', UsuarioControl.buscarUsuario);//check

//Filtrar por estado
api.get('/usuario-estado/:estado', UsuarioControl.usuariosEstado);//check

//obtener un usuario
api.get('/usuario/:id', UsuarioControl.obtenerUsuario);//check

// Ruta borrara usuarios
api.delete('/eliminarUsuarios/:id', UsuarioControl.borrarUsuario);//check

// registro por el lado de admin 

api.post('/registroAdmin', UsuarioControl.registrarUsuarioAdmin);

// Exportar el módulo
module.exports = api;

