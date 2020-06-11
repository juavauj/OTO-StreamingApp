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
    contrasena: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        default: null
    },
    suscripcion: {
        type: String,
        default: "lite"
    },
    estado: {
        type: String,
        default: null
    }
});

// Exportar el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema);