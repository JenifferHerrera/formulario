import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from 'src/app/services/formulario.service';


@Component({
  selector: 'app-crear-formulario',
  templateUrl: './crear-formulario.component.html',
  styleUrls: ['./crear-formulario.component.css']
})
export class CrearFormularioComponent implements OnInit {
  formularioForm: FormGroup;
  titulo = ' ACTA DE REUNION ';
  id: string | null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _formularioService: FormularioService,
              private aRouter: ActivatedRoute) {
    this.formularioForm = this.fb.group({
        fecha: ['', Validators.required],
        lugar: ['', Validators.required],
        unidad: ['', Validators.required],
        noActa: ['', Validators.required],
        objetivo: ['', Validators.required],
        horaInicial: ['', Validators.required],
        horaFinal: ['', Validators.required],
        antecedentes: ['', Validators.required],
        agenda: ['', Validators.required],
        desarrollo: ['', Validators.required],
        compromiso: ['', Validators.required],
        fechaEntrega: ['', Validators.required],
        responsable: ['', Validators.required],
        nombreParticipante: ['', Validators.required],
        entidad: ['', Validators.required],
        correo: ['', Validators.required],
        telefono: ['', Validators.required],
        firma: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.esEditar();
  }
  /*esEditar() {
    throw new Error('Method not implemented.');
  }*/

  agregarFormulario(){

    const FORMULARIO: Formulario = {
      fecha: this.formularioForm.get('fecha')?.value,
      lugar: this.formularioForm.get('lugar')?.value,
      unidad: this.formularioForm.get('unidad')?.value,
      noActa: this.formularioForm.get('noActa')?.value,
      objetivo: this.formularioForm.get('objetivo')?.value,
      horaInicial: this.formularioForm.get('horaInicial')?.value,
      horaFinal: this.formularioForm.get('horaFinal')?.value,
      antecedentes: this.formularioForm.get('antecedentes')?.value,
      agenda: this.formularioForm.get('agenda')?.value,
      desarrollo: this.formularioForm.get('desarrollo')?.value,
      compromiso: this.formularioForm.get('compromiso')?.value,
      fechaEntrega: this.formularioForm.get('fechaEntrega')?.value,
      responsable: this.formularioForm.get('responsable')?.value,
      nombreParticipante: this.formularioForm.get('nombreParticipante')?.value,
      entidad: this.formularioForm.get('entidad')?.value,
      correo: this.formularioForm.get('correo')?.value,
      telefono: this.formularioForm.get('telefono')?.value,
      firma: this.formularioForm.get('firma')?.value,
    }

    if(this.id !== null){
      //editar formulario
      this._formularioService.editarFormulario(this.id, FORMULARIO).subscribe(data => {
        this.toastr.info('El formulario fue actualizado con exito!', 'Formulario Actualizado!');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.formularioForm.reset();
      })

    }else {
      //agregando formulario
      console.log(FORMULARIO);
      this._formularioService.guardarFormulario(FORMULARIO).subscribe(data => {
      this.toastr.success('El formulario fue registrado con exito!', 'Formulario Registrado!');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.formularioForm.reset();
    })
    }

}

esEditar() {

  if(this.id !== null) {
    this.titulo = 'Editar formulario';
    this._formularioService.obtenerFormulario(this.id).subscribe(data => {
      this.formularioForm.setValue({
        fecha: data.fecha,
        lugar: data.lugar,
        unidad: data.unidad,
        noActa: data.noActa,
        objetivo: data.objetivo,
        horaInicial: data.horaInicial,
        horaFinal: data.horaFinal,
        antecedentes: data.antecedentes,
        agenda: data.agenda,
        desarrollo: data.desarrollo,
        compromiso: data.compromiso,
        fechaEntrega: data.fechaEntrega,
        responsable: data.responsable,
        nombreParticipante: data.nombreParticipante,
        entidad: data.entidad,
        correo: data.correo,
        telefono: data.telefono,
        firma: data.firma,
      })
    })
  }
}



}
