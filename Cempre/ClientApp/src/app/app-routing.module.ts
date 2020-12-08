import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EstudianteConsultaComponent} from './Solicitud/estudiante-consulta/estudiante-consulta.component';
import {EstudianteRegistroComponent} from './Solicitud/estudiante-registro/estudiante-registro.component';
import { RegistrarComponent } from './Gestion/registrar/registrar.component';
import { LoginComponent } from './Login/login/login.component';
import { RegisterComponent } from './Login/register/register.component';
import { EmpresaConsultaComponent } from './Solicitud/empresa-consulta/empresa-consulta.component';
import { EmpresaRegistroComponent } from './Solicitud/empresa-registro/empresa-registro.component';
import { EmpresaPerfilComponent } from './Solicitud/perfil/empresa-perfil/empresa-perfil.component';
import { EstudiantePerfilComponent } from './Solicitud/perfil/estudiante-perfil/estudiante-perfil.component';

const routes: Routes = [
  {
  path: 'estudianteConsulta',
  component:EstudianteConsultaComponent
  },
  {
  path: 'empresaConsulta',
  component:EmpresaConsultaComponent
  },
  { path: 'empresaRegistro',
  component:EmpresaRegistroComponent
  },
  {
    path: 'estudianteRegistro',
    component:EstudianteRegistroComponent
  },
  {
      path: 'gestion',
      component:RegistrarComponent
    },
  {
      path: 'empresaPerfil',
      component:EmpresaPerfilComponent
    },
  {
      path: 'estudiantePerfil',
      component:EstudiantePerfilComponent
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
