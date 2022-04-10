import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Formulario } from 'src/app/models/formulario';
import { FormularioService } from 'src/app/services/formulario.service';

@Component({
  selector: 'app-listar-formularios',
  templateUrl: './listar-formularios.component.html',
  styleUrls: ['./listar-formularios.component.css']
})
export class ListarFormulariosComponent implements OnInit {
  listFormularios: Formulario[] = [];

  constructor(private _formularioService: FormularioService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.obtenerFormularios();
  }

  obtenerFormularios() {
    this._formularioService.getFormularios().subscribe(data => {
      console.log(data);
      this.listFormularios = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarFormulario(id: any) {
    this._formularioService.eliminarFormulario(id).subscribe(data => {
      this.toastr.error('El formulario fue eliminado con exito' ,'Formulario Eliminado');
      this.obtenerFormularios();
    }, error => {
      console.log(error);
    })
  }


}

