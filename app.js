// Importando librerias
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');
// Importando la configuracion del puerto
const puerto = require('./config/puerto');

// Definiendo los archivos de las rutas
const registro = require('./routes/registro');

// Utilizando la funcion express para hacer uso del servidor
const app = express();

app.use(cors());
// Habilitando el CORS, con esto podemos permitir peticiones
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

// Utilizando body parser para poder usar los datos entrantes ya codificados hacia el req.body
app.use(bodyparser.urlencoded({ extended: true }));

// Utilizamos el metodo json para que los datos sean datos JSON
app.use(bodyparser.json());

// Definiendo las rutas
// Ruta para los datos del registro
app.use('/registro', registro);
app.get('/', (req, res) => {
    res.status(200).json({
        estado: true,
        mensaje: 'Peticion realizada correctamente'
    });
});
// app.get('/*', (req, res) =>
//     res.sendFile('index.html', { root: 'FrontEnd/' }),
// );
// app.use("/", express.static(path.join(__dirname, 'FrontEnd')));
// Cambiando el puerto
app.set('port', puerto);

// Inciando el servidor
app.listen(app.get('port'), () => console.log(`Escuchando peticiones en el puerto: ${app.get('port')}`));