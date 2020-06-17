const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Objeto Schema
var UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    correo: {
       type: String,
       unique: true,
       required: true
    },
    nick: {
        type: String,
        unique: true,
        required: true
    },
    contrasena: {
        type: String,
        required: true,
        minlength: 8
    },
    rol: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        default: null
    },
    tipoSuscripcion: {
        type: String,
        default: "lite",
        required: true
    },
    estado: {
        type: String,
        default: "activo",
        required: true
    }
});

// Exportar el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);