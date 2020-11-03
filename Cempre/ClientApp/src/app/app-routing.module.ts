import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EstudianteConsultaComponent} from './Solicitud/estudiante-consulta/estudiante-consulta.component';
import {EstudianteRegistroComponent} from './Solicitud/estudiante-registro/estudiante-registro.component';

const routes: Routes = [
  {
  path: 'estudianteConsulta',
  component:EstudianteConsultaComponent
  },
  {
    path: 'estudianteRegistro',
    component:EstudianteRegistroComponent
  }
];






@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
