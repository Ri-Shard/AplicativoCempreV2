import { Component, OnInit } from '@angular/core';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Empresa } from 'src/app/Solicitud/models/empresa';
import { Estudiante } from 'src/app/Solicitud/models/estudiante';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  empresa: Empresa;
  estudiante:Estudiante;

  constructor(private _empresaService: EmpresaService,private _estudianteService: EstudianteService) { }
ngOnInit(){

}
}
