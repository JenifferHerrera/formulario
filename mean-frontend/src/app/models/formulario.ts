
export class Formulario {

    _id?: number;
    fecha: string;
    lugar: string;
    unidad: string;
    noActa: number;
    objetivo: string;
    horaInicial: string;
    horaFinal: string;
    antecedentes: string;
    agenda: string;
    desarrollo: string;
    compromiso: string;
    fechaEntrega: string;
    responsable: string;
    nombreParticipante: string;
    entidad: string;
    correo: string;
    telefono: number;
    firma: string;


    constructor(
      fecha: string,
      lugar: string,
      unidad: string,
      noActa: number,
      objetivo: string,
      horaInicial: string,
      horaFinal: string,
      antecedentes: string,
      agenda: string,
      desarrollo: string,
      compromiso: string,
      fechaEntrega: string,
      responsable: string,
      nombreParticipante: string,
      entidad: string,
      correo: string,
      telefono: number,
      firma: string )

    {
        this.fecha = fecha;
        this.lugar  = lugar;
        this.unidad = unidad;
        this.noActa = noActa;
        this.objetivo = objetivo;
        this.horaInicial = horaInicial;
        this.horaFinal = horaFinal;
        this.antecedentes = antecedentes;
        this.agenda = agenda;
        this.desarrollo = desarrollo;
        this.compromiso = compromiso;
        this.fechaEntrega = fechaEntrega;
        this.responsable = responsable;
        this.nombreParticipante = nombreParticipante;
        this.entidad = entidad;
        this.correo = correo;
        this.telefono = telefono;
        this.firma = firma;
      }
    }
