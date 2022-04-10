const mongoose = require('mongoose');

const FormularioSchema = mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    lugar: {
        type: String,
        required: true
    },
    unidad: {
        type: String,
        required: true
    },
    noActa: {
        type: Number,
        required: true
    },
    objetivo: {
        type: String,
        required: true
    },
    horaInicial: {
        type: String,
        required: true
    },
    horaFinal: {
        type: String,
        required: true
    },
    antecedentes: {
        type: String,
        required: true
    },
    agenda: {
        type: String,
        required: true
    },
    desarrollo: {
        type: String,
        required: true
    },
    compromiso: {
        type: String,
        required: true
    },
    fechaEntrega: {
        type: String,
        required: true
    },
    responsable: {
        type: String,
        required: true
    },
    nombreParticipante: {
        type: String,
        required: true
    },
    entidad: {
        type: String,
        required: true
    },
    correo: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    firma: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Formulario', FormularioSchema);