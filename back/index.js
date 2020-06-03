// Archivo con la lógica de la conexión a la BD

const mongoose = require('mongoose');
const app = require('./app');
const port = 3000;


// URL Base de Datos

const DB = 'mongodb://localhost:27017/otoMusicApp';


// Conexión a y Servidor

mongoose.connect(DB, (err, res)=>{
    if(err){
        console.log(`El error es ${err}`);
    }else{
        console.log(`Conexión Exitosa`);
        // app.set('port', process.env.PORT || 3000); -> configuracion de puerto del hosting
        app.listen(port, ()=>{
            console.log(`Puerto: ${port}`)
        });
    }
});