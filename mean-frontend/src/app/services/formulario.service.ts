import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formulario } from '../models/formulario';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url = 'http://localhost:4000/api/formularios/';

  constructor(private http: HttpClient) { }

getFormularios(): Observable<any> {
  return this.http.get(this.url);
}

eliminarFormulario(id: string): Observable<any> {
  return this.http.delete(this.url + id);
}

guardarFormulario(formulario: Formulario): Observable<any> {
  return this.http.post(this.url, formulario);
}

obtenerFormulario(id: string): Observable<any> {
  return this.http.get(this.url + id);
}

editarFormulario(id: string, formulario:Formulario): Observable<any> {
  return this.http.put(this.url + id, formulario);
}

imprimirFormulario(id: string): Observable<any> {
  return this.http.get(this.url + id);
}
}
