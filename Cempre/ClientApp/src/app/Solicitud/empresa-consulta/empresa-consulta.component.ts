import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import {EmpresaService} from "../../services/empresa.service";
@Component({
  selector: 'app-empresa-consulta',
  templateUrl: './empresa-consulta.component.html',
  styleUrls: ['./empresa-consulta.component.css']
})
export class EmpresaConsultaComponent implements OnInit {

  empresas:Empresa[];
  constructor(private empresaService: EmpresaService) { }

  ngOnInit() {
    this.empresaService.get().subscribe(result =>{
      this.empresas = result;
    });  
   }

}




