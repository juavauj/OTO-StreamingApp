const Usuario = require('../modelo/usuario');

const fs = require('fs');

const path = require('path');

// Función Registro Usuario
function registrarUsuario(req, res){
    var usuario = new Usuario();
    var parametros = req.body;

    usuario.nombre = parametros.nombre;
    usuario.apellido = parametros.apellido;
    usuario.correo = parametros.correo;
    usuario.contrasena = parametros.contrasena;
    usuario.rol = parametros.usuario;
    usuario.imagen = null;

    // Función save para interactuar con la BD
    usuario.save((err, usuarioNuevo)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!usuarioNuevo){
                res.status(200).send({message: "No fue posible realizar el registro"});
            }else{
                res.status(200).send({
                    message: "Usuario Creado",
                    usuario: usuarioNuevo
                });
            }
        }
    });
}
// Función Login
function login(req, res){
    var parametros = req.body;
    var correoUsuario = parametros.correo;
    var contraUsuario = parametros.contrasena;

    Usuario.findOne({correo: correoUsuario}, (err, usuarioLogeado)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!usuarioLogeado){
                res.status(200).send({message: "Usuario inexistente"});
            }else{
                if(usuarioLogeado.contrasena != contraUsuario){
                    res.status(200).send({message: "Contraseña incorrecta"});
                }else{
                    res.status(200).send({
                        message: "Usuario Logueado!",
                        usuario: usuarioLogeado
                    })
                }
            }
        }
    });
}
// Función Actualizar Usuario
function actualizarUsuario(req, res){
    let usuarioId = req.params.id;
    let nuevosDatosUsuario = req.body;

    Usuario.findByIdAndUpdate(usuarioId, nuevosDatosUsuario, (err, usuarioActualizado)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        } else{
            if(!usuarioActualizado){
                res.status(200).send({message: "No fue posible actualizar tus datos"});
            } else {
                res.status(200).send({
                    message: "Usuario Actualizado!",
                    usuario: nuevosDatosUsuario
                })
            }
        }
    });
}

//funcion subir imagen
function subirImagen(req, res){
    var usuarioId = req.params.id;
    var nombreArchivo = "no has subido ninguna imagen";

    if(req.files){

        var rutaArchivo = req.files.imagen.path;
        console.log(`ruta Archivo: ${rutaArchivo}`);

        var partirArchivo = rutaArchivo.split('\\');
        console.log(`partir Archivo: ${partirArchivo}`);

        var nombreArchivo = partirArchivo[2];
        console.log(`Posicion dato: ${nombreArchivo}`);

        var extensionImg = nombreArchivo.split('\.');
        console.log(`partirImg: ${extensionImg}`);

        var extensionArchivo = extensionImg[1];
        console.log(`Extension Archivo: ${extensionArchivo}`);

        if(extensionArchivo == 'png' || extensionArchivo == 'jpg'){
            Usuario.findByIdAndUpdate(usuarioId,{imagen: nombreArchivo}, (err, usuarioConImg)=>{
               if(err){
                   res.status(500).send({message: "Error en el server"});
               } else{
                   if(!usuarioConImg){
                       res.status(200).send({message: "no fue posible subir la imagen"});
                   } else {
                       res.status(200).send({
                           message: "Imagen anexada!",
                           imagen: nombreArchivo,
                           usuario: usuarioConImg
                       })
                   }
               }
            });
        } else {
            res.status(200).send({message: "Formato invalido"})
        }

    } else {
        res.status(200).send({message:"no has subido imagenes"});
    }
}

// funcion mostrar archivo

function mostrarArchivo(req, res){
    var archivo = req.params.imageFile;
    var ruta = './archivos/usuarios/'+archivo;

    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        } else {
            res.status(200).send({message: "imagen no encontrada"});
        }
    });
}


// Exportar paquete de funciones
module.exports = {
    registrarUsuario,
    login,
    actualizarUsuario,
    subirImagen,
    mostrarArchivo
}