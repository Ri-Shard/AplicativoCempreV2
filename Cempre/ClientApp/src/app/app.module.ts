import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { EstudianteConsultaComponent } from './Solicitud/estudiante-consulta/estudiante-consulta.component';
import { EstudianteRegistroComponent } from './Solicitud/estudiante-registro/estudiante-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { EstudianteService } from './services/estudiante.service';
import { RegistrarComponent } from './Gestion/registrar/registrar.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './Login/register/register.component';
import { EmpresaRegistroComponent } from './Solicitud/empresa-registro/empresa-registro.component';
import { EmpresaConsultaComponent } from './Solicitud/empresa-consulta/empresa-consulta.component';
import { EmpresaPerfilComponent } from './Solicitud/perfil/empresa-perfil/empresa-perfil.component';
import { EstudiantePerfilComponent } from './Solicitud/perfil/estudiante-perfil/estudiante-perfil.component';
import { View1Component } from './Solicitud/empresa-registro/views/view1/view1.component';
import { View2Component } from './Solicitud/empresa-registro/views/view2/view2.component';
import { View3Component } from './Solicitud/empresa-registro/views/view3/view3.component';
import { Rview1Component } from './Solicitud/estudiante-registro/views/view1/view1.component';
import { Rview2Component } from './Solicitud/estudiante-registro/views/view2/view2.component';
import { LoginComponent } from './Login/login/login.component';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { PagoComponent } from './Solicitud/perfil/pago/pago.component';
import { FiltroxEmpresasPipe } from './pipe/filtrox-empresas.pipe';
import { FiltroxEstadoPipe } from './pipe/filtrox-estado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    EstudianteConsultaComponent,
    EstudianteRegistroComponent,
    RegistrarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    EmpresaRegistroComponent,
    EmpresaConsultaComponent,
    EmpresaPerfilComponent,
    EstudiantePerfilComponent,
    View1Component,
    View2Component,
    View3Component,
    Rview1Component,
    Rview2Component,
    AlertModalComponent,
    PagoComponent,
    FiltroxEmpresasPipe,
    FiltroxEstadoPipe
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
    ]),
    AppRoutingModule
  ],
  entryComponents:[AlertModalComponent],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
