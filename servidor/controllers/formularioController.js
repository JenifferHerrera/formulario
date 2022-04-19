const Formulario = require("../models/Formulario");



exports.crearFormulario = async (req, res)  => {
    try {
        let formulario;
        
        // Creamos formulario
        formulario = new Formulario(req.body);

        await formulario.save();
        res.send(formulario)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerFormularios = async (req, res) => {
    try{
        const formularios = await Formulario.find();
        res.json(formularios)

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarFormulario = async (req, res) => {

    try {
        const { fecha, lugar, unidad, noActa, objetivo,
               horaInicial, horaFinal, antecedentes, agenda,
               desarrollo, compromiso, fechaEntrega, responsable,
               nombreParticipante, entidad, correo, telefono, firma } = req.body;
               let formulario = await Formulario.findById(req.params.id);

               if(!formulario) {
                res.status(404).json({ msg: 'No existe el formulario' })
            }

            formulario.fecha = fecha;
            formulario.lugar  = lugar;
            formulario.unidad = unidad;
            formulario.noActa = noActa;
            formulario.objetivo = objetivo;
            formulario.horaInicial = horaInicial;
            formulario.horaFinal = horaFinal;
            formulario.antecedentes = antecedentes;
            formulario.agenda = agenda;
            formulario.desarrollo = desarrollo;
            formulario.compromiso = compromiso;
            formulario.fechaEntrega = fechaEntrega;
            formulario.responsable = responsable;
            formulario.nombreParticipante = nombreParticipante;
            formulario.entidad = entidad;
            formulario.correo = correo;
            formulario.telefono = telefono;
            formulario.firma = firma;

            formulario = await Formulario.findOneAndUpdate({ _id: req.params.id },formulario, { new: true} )
            res.json(formulario);
        
        } catch (error) {
            console.log(error);
            res.status(500).send('Hubo un error');
        }
}

exports.obtenerFormulario = async (req, res) => {
    try{
        let formulario = await Formulario.findById(req.params.id);

        if(!formulario) {
            res.status(404).json({ msg: 'No existe el formulario' })
        }
        res.json(formulario);

    }catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarFormulario = async (req, res) => {

    try {
        let formulario = await Formulario.findById(req.params.id);

        if(!formulario) {
            res.status(404).json({ msg: 'No existe el formulario' })
        }
       
        await Formulario.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Formulario eliminado con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

