import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { ListarFormulariosComponent } from './components/listar-formularios/listar-formularios.component';
import { CrearFormularioComponent } from './components/crear-formulario/crear-formulario.component';

const routes: Routes = [

  { path: '', component: ListarFormulariosComponent },
  { path: 'crear-formulario', component: CrearFormularioComponent},
  { path: 'editar-formulario/:id', component: CrearFormularioComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' }, //redirecciona ruta raiz
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
