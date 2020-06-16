const Artista = require('../modelo/artistas');

const fs = require('fs');
const path = require('path');

//agregar un artista
async function addArtista(req, res){
    var artista = new Artista();
    var parametros = req.body;

    artista.nombre = parametros.nombre;
/*     artista.genero = parametros.genero;*/    artista.imagen = null;
    artista.biografia = parametros.biografia;
    artista.estado = parametros.estado;

    try {
        let artistaNuevo = await artista.save();
        res.send({message: "Artista registrado", artista: artistaNuevo});
    } catch (error) {
        res.status(500).send({message: "No ha sido posible registrar el artista"});
    }
}

//actualizar un artista
async function actualizarArtista(req, res) {
    var artistaId = req.params.id;
    var nuevosDatosArtista = req.body;

    try {
        let artistaActualizado = await Artista.findByIdAndUpdate(artistaId, nuevosDatosArtista);
        res.send({message: "Artista actualizado", artista: artistaActualizado}); 
    } catch (error) {
        res.status(500).send({message: "No ha sido posible actualizar el artista"}); 
    } 
}

//borrar un artista
async function borrarArtista(req, res) {
    var artistaId = req.params.id;
    try {
        let artistaEliminado = await Artista.findByIdAndDelete(artistaId);
        res.send({message: "Artista eliminado", artista: artistaEliminado});
    } catch (error) {
        res.status(500).send({message: "No ha sido posible eliminar el artista"}); 
    }  
}

//mostrar un artista
function mostrarUnArtista(req, res) {
    var artistaId = req.params.id;

    Artista.findById(artistaId, (err, artistaEncontrado)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaEncontrado) {
                res.status(200).send({message: "No ha sido posible encontrar el artista"});
            }else{
                res.status(200).send({
                    message: "Artista encontrado", 
                    artista: artistaEncontrado
                });
            }
        }
    })
}

//mostrar todos los artistas
function showArtistas(req, res) {

    Artista.find((err, artistasEncontrados)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistasEncontrados) {
                res.status(200).send({message: "No ha sido posible encontrar artistas"});
            }else{
                res.status(200).send({
                    message: "Artistas encontrados", 
                    artista: artistasEncontrados
                });
            }
        }
    });
}

//buscar artista por nombre
function buscarArtista(req, res) {
    var resBusqueda = req.params.busqueda;

    Artista.find({nombre: {$regex: resBusqueda, $options: 'i'}}, (err, artistaFound)=>{
        if (err) {
            res.status(500).send({message: "Error en el servidor"});
        }else{
            if (!artistaFound) {
                res.status(200).send({message: "No se ha encontrado ningún artista"});
            }else{
                res.status(200).send({
                    message: "artistas encontrados", 
                    artista: artistaFound
                });
            }
        }
    });
}

//Funcion filtrar por estado
async function artistasEstado(req, res){
    var estado = req.params.estado;

    try {
        const artists = await Artista.find({estado: estado});
        res.json(artists); 
    } catch (error) {
        res.status(200).send({message: "No se ha encontrado ningún artista"})
    } 
}

function subirImg(req, res){
    var artistaId = req.params.id;
    var nombreArchivo = "No ha subido ninguna imagen...";

    if(req.files){
        
        var rutaArchivo = req.files.imagen.path;
        var partirArchivo = rutaArchivo.split('\\');
        var nombreArchivo = partirArchivo[2];
        var extensionImg = nombreArchivo.split('\.');
        var extensionArchivo = extensionImg[1];

        if(extensionArchivo == 'png' || extensionArchivo == 'jpg'){

            Artista.findByIdAndUpdate(artistaId, {imagen: nombreArchivo}, (err, artistaImg)=>{
                if(err){
                    res.status(500).send({message: "Error en el servidor"});
                }else{
                    if(!artistaImg){
                        res.status(200).send({message: "No fue posible subir la imagen"});
                    }else{
                        res.status(200).send({
                            message: "Imagen anexada",
                            imagen: nombreArchivo,
                            artista: artistaImg
                        });
                    }
                }
            });
        }else{
            res.status(200).send({message: "Formato inválido! El archivo no es una imagen"});
        }
    }else{
        res.status(200).send({message: "No has subido imagenes"});
    }
}

// Función mostrar archivo
function mostrarArchivo(req, res){

    var archivo = req.params.imageFile;
    var ruta = './archivos/artistas/'+archivo;

    // Validar si existe o no 
    fs.exists(ruta, (exists)=>{
        if(exists){
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });
}

//exportar modulos

module.exports = {
    showArtistas,
    addArtista,
    mostrarUnArtista,
    borrarArtista,
    actualizarArtista,
    subirImg,
    mostrarArchivo,
    buscarArtista,
    artistasEstado
}

