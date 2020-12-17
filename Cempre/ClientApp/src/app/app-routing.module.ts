import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EstudianteConsultaComponent} from './Solicitud/estudiante-consulta/estudiante-consulta.component';
import {EstudianteRegistroComponent} from './Solicitud/estudiante-registro/estudiante-registro.component';
import { RegistrarComponent } from './Gestion/registrar/registrar.component';
import { RegisterComponent } from './Login/register/register.component';
import { EmpresaConsultaComponent } from './Solicitud/empresa-consulta/empresa-consulta.component';
import { EmpresaRegistroComponent } from './Solicitud/empresa-registro/empresa-registro.component';
import { EmpresaPerfilComponent } from './Solicitud/perfil/empresa-perfil/empresa-perfil.component';
import { EstudiantePerfilComponent } from './Solicitud/perfil/estudiante-perfil/estudiante-perfil.component';
import { View1Component } from './Solicitud/empresa-registro/views/view1/view1.component';
import { View2Component } from './Solicitud/empresa-registro/views/view2/view2.component';
import { View3Component } from './Solicitud/empresa-registro/views/view3/view3.component';
import { Rview1Component } from './Solicitud/estudiante-registro/views/view1/view1.component';
import { Rview2Component } from './Solicitud/estudiante-registro/views/view2/view2.component';
import { LoginComponent } from './Login/login/login.component';
import { PagoComponent } from './Solicitud/perfil/pago/pago.component';

const routes: Routes = [
  {
  path: 'estudianteConsulta',
  component:EstudianteConsultaComponent
  },
  {
  path: 'empresaConsulta',
  component:EmpresaConsultaComponent
  },
  {
  path: 'estudianteConsulta/:estado',
  component:EstudianteConsultaComponent
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
      path: 'empresaPerfil/:id',
      component:EmpresaPerfilComponent
    },
  {
      path: 'estudiantePerfil/:id',
      component:EstudiantePerfilComponent
    },
  {
      path: 'pago/:id',
      component:PagoComponent
    },

    {
        path: 'loginRegistro',
        component:RegisterComponent
      },
    {
        path: 'login',
        component:LoginComponent
      },
    {
        path: 'view1',
        component:View1Component
      },
    {
        path: 'view2',
        component:View2Component
      },
    {
        path: 'view3',
        component:View3Component
      },
    {
        path: 'rview1',
        component:Rview1Component
      },
    {
        path: 'rview2',
        component:Rview2Component
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
