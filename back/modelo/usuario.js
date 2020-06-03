const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var UsuarioSchema = new Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contrasena: String,
    rol: String,
    imagen: String
    // imagen: {required: true}
});

// Exportar el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);