const Usuario = require('../modelo/usuario');
// Importar el módulo file system de Node
const fs = require('fs');
// Importar el módulo Path de Node
const path = require('path');

// Función Registro Usuario
function registrarUsuario(req, res){
    var usuario = new Usuario();
    var parametros = req.body;

    usuario.nombre = parametros.nombre;
    usuario.apellido = parametros.apellido;
    usuario.correo = parametros.correo;
    usuario.nick = parametros.nick;
    usuario.contrasena = parametros.contrasena;
    usuario.rol = parametros.rol;
    usuario.imagen = null;
    usuario.tipoSuscripcion = 'lite';
    usuario.estado = 'activo';

    console.log(usuario)
    console.log(parametros)
    
    usuario.save((err, usuarioNuevo)=>{
        console.log(err)
        if(err){
            res.status(500).send({message: "Error en el servidor"});
            console.log(err);
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

// funcion para registro de usuarios en el admin 

function registrarUsuarioAdmin(req, res){
    var usuario = new Usuario();
    var parametros = req.body;

    usuario.nombre = parametros.nombre;
    usuario.apellido = parametros.apellido;
    usuario.correo = parametros.correo;
    usuario.nick = parametros.nick;
    usuario.contrasena = parametros.contrasena;
    usuario.rol = parametros.rol;
    usuario.imagen = null;
    usuario.tipoSuscripcion = parametros.tipoSuscripcion;
    usuario.estado = parametros.estado;

    console.log(usuario)
    console.log(parametros)
    
    usuario.save((err, usuarioNuevo)=>{
        console.log(err)
        if(err){
            res.status(500).send({message: "Error en el servidor"});
            console.log(err);
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

// Función Actualizar Usuario
function actualizarUsuario(req, res){
  
    var usuarioId = req.params.id;
    var nuevosDatosUsuario = req.body;

    Usuario.findByIdAndUpdate(usuarioId, nuevosDatosUsuario, (err, usuarioActualizado)=> {
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!usuarioActualizado){
                res.status(200).send({message: "No fue posible actualizar tus datos"});
            }else{
                res.status(200).send({
                    message: "Usuario Actualizado",
                    usuario: nuevosDatosUsuario
                });
            }
        }
    });

}

//Función borrar usuario
async function borrarUsuario(req, res) {
    var usuarioId = req.params.id;

    try {
        await Usuario.findByIdAndDelete(usuarioId);
        res.send({message: "Usuario eliminado"});
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
    
}

// Funcion mostrar usuarios 
async function obtenerUsuarios(req, res){
    
    try {
        const users = await Usuario.find();
        res.json(users);
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
}

// Funcion mostrar usuarios 
async function obtenerUsuario(req, res){
    var usuarioId = req.params.id;

    try {
        const users = await Usuario.find({_id: usuarioId});
        res.json(users);
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
}

//buscar o filtar por nombre
function buscarUsuario(req, res) {
    var resBusqueda = req.params.busqueda;

    Usuario.find({nombre: {$regex: resBusqueda, $options: 'i'}}, (err, usuarioFound)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!usuarioFound) {
                res.status(200).send({message: "No se ha encontrado ningún usuario"});
            }else{
                res.status(200).send({
                    message: "usuarios encontrados", 
                    usuario: usuarioFound
                });
            }
        }
    });
}

//Funcion filtrar por estado
async function usuariosEstado(req, res){
    var estado = req.params.estado;
    
    try {
        const users = await Usuario.find({estado: estado});
        res.json(users);
    } catch (error) {
        res.status(500).send({message: "Error en el servidor"});
    }
}

// Función Login
function login(req, res){
    var parametros = req.body;
    //var user = parametros.usuario;
    var correo = parametros.correo;
    var contraUsuario = parametros.contrasena;

    console.log(parametros);

    Usuario.findOne({correo: correo }, (err, usuarioLogeado)=>{
        if(err){
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if(!usuarioLogeado){
                res.status(200).send({message: "Usuario inexistente"});
            }else{
                if(usuarioLogeado.contrasena != contraUsuario){
                    res.status(200).send({message: "Contraseña incorrecta"});
                }else{
                    console.log('sa',usuarioLogeado)
                    res.status(200).send({
                        message: "Usuario Logueado!",
                        usuario: usuarioLogeado
                    })
                }
            }
        }
    });
}

// Función Subir IMG
function subirImg(req, res){
    var usuarioId = req.params.id;
    var nombreArchivo = "No ha subido ninguna imagen...";

    // Validar si efectivamente se está enviando un archivo
    if(req.files){
        // Vamor a ir analizando la ruta del archivo, el nombre y la extensión
        // C:\\usuarios\descargas\imagen.png
        
        var rutaArchivo = req.files.imagen.path;
        console.log(`ruta Archivo: ${rutaArchivo}`);

        // Haremos un split para separar elementos
        var partirArchivo = rutaArchivo.split('\\');
        console.log(`partir Archivos: ${partirArchivo}`);

        // Acceder a la posición que contiene el nombre del archivo
        var nombreArchivo = partirArchivo[2];
        console.log(`ruta Archivo: ${rutaArchivo}`);

        // Haremos un split para separar el nombre del archivo de la extensión
        var extensionImg = nombreArchivo.split('\.');
        console.log(`partirImg: ${extensionImg}`);

        // Accedemos a la posición de la extensión del archivo
        var extensionArchivo = extensionImg[1];
        console.log(`Extension Archivo: ${extensionArchivo}`);

        // Validar si el formato del archivo es acceptable
        if(extensionArchivo == 'png' || extensionArchivo == 'jpg'){
            // Actualizar del usuario el campo imagen
            Usuario.findByIdAndUpdate(usuarioId, {imagen: nombreArchivo}, (err, usuarioConImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!usuarioConImg){
                        res.status(200).send({message: "No fue posible subir la imagen"});
                    }else{
                        res.status(200).send({
                            message: "Imagen anexada",
                            imagen: nombreArchivo,
                            usuario: usuarioConImg
                        });
                    }
                }
            });
        }else{
            // Formato no valido
            res.status(200).send({message: "Formato inválido! El archivo no es una imagen"});
        }
    }else{
        res.status(200).send({message: "No has subido imagenes"});
    }
}

// Función mostrar archivo
function mostrarArchivo(req, res){
    // Pedir el archivo que queremos mostrar
    var archivo = req.params.imageFile;
    // Ubicacion del archivo
    var ruta = './archivos/usuarios/'+archivo;

    // Validar si existe o no 
    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });



    

}

//Funcion login admin

// Exportar paquete de funciones
module.exports = {
    registrarUsuario,
    login,
    actualizarUsuario,
    subirImg,
    mostrarArchivo,
    obtenerUsuarios,
    obtenerUsuario,
    buscarUsuario,
    borrarUsuario,
    usuariosEstado,
    registrarUsuarioAdmin
}