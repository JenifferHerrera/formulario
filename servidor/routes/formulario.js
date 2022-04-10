// Rutas para producto
const express = require('express');
const router = express.Router();
const formularioController = require('../controllers/formularioController');

router.post('/', formularioController.crearFormulario);
router.get('/', formularioController.obtenerFormularios);
router.put('/:id', formularioController.actualizarFormulario);
router.get('/:id', formularioController.obtenerFormulario);
router.delete('/:id', formularioController.eliminarFormulario);

module.exports = router