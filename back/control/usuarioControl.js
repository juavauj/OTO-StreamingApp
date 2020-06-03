const Usuario = require('../modelo/usuario');

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

// Exportar paquete de funciones
module.exports = {
    registrarUsuario,
    login
}