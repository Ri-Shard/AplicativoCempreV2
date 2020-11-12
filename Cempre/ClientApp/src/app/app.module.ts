import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EstudianteConsultaComponent } from './Solicitud/estudiante-consulta/estudiante-consulta.component';
import { EstudianteRegistroComponent } from './Solicitud/estudiante-registro/estudiante-registro.component';
import { AppRoutingModule } from './app-routing.module';
import { EstudianteService } from './services/estudiante.service';
import { RegistrarComponent } from './Gestion/registrar/registrar.component';
import { FooterComponent } from './footer/footer.component';
import { FloatWidgetComponent } from './float-widget/float-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EstudianteConsultaComponent,
    EstudianteRegistroComponent,
    RegistrarComponent,
    FooterComponent,
    FloatWidgetComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule
  ],
  providers: [EstudianteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
