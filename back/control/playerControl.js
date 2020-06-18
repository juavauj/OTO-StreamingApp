const Track = require('../modelo/canciones');

const fs = require('fs');
const path = require('path');
const { exists } = require('../modelo/canciones');

// play

function playMedia(req, res){
    var archivo = req.params.file;
    var ruta = './archivos/canciones/' + archivo;

    fs.exists(ruta, (exists)=>{
        if (exists) {
            res.sendFile(path.resolve(ruta));
        }else{
            res.status(200).send({message: "Imagen no encontrada"});
        }
    });
}


//pausa


//next


//prev


//shuffle


//nowPlaying (mostrar cancion)


//siguientes (opcional)


//repetir (opcional)


//progreso rep

module.exports = {
    playMedia
}