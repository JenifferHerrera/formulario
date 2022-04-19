const express = require('express');
const conectarDB = require('./coneccion/coneccion');
const cors = require('cors');

// Creamos el servidor
const app = express();

app.use(cors())

app.use(express.json());

///api/formularios url para postman
app.use('/api/formularios', require('./routes/formulario'));   //importando archivo formulario.js

app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})
