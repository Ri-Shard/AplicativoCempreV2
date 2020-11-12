import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EstudianteConsultaComponent} from './Solicitud/estudiante-consulta/estudiante-consulta.component';
import {EstudianteRegistroComponent} from './Solicitud/estudiante-registro/estudiante-registro.component';
import { RegistrarComponent } from './Gestion/registrar/registrar.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';

const routes: Routes = [
  {
  path: 'estudianteConsulta',
  component:EstudianteConsultaComponent
  },
  {
    path: 'estudianteRegistro',
    component:EstudianteRegistroComponent
  },
  {
      path: 'gestionRegistro',
      component:RegistrarComponent
    },
    {
        path: 'loginRegistro',
        component:RegisterComponent
      },
    {
        path: 'login',
        component:LoginComponent
      },
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
