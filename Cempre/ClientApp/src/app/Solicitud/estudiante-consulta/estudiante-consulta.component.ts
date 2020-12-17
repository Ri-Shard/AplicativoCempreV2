import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import {EstudianteService} from "../../services/estudiante.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-estudiante-consulta',
  templateUrl: './estudiante-consulta.component.html',
  styleUrls: ['./estudiante-consulta.component.css']
})
export class EstudianteConsultaComponent implements OnInit {

estudiantes:Estudiante[];
estudiante:Estudiante;
estado:string;
nit:string;
  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.estado = this.route.snapshot.paramMap.get('estado');
    this.estudianteService.get().subscribe(result =>{
    this.estudiantes = result;
    });  
   }
   add(){
    this.nit = JSON.parse(localStorage.getItem('nit'));
     this.estudiante.empresaID = this.nit ;
     this.estudianteService.put(this.estudiante).subscribe(result =>{
      this.estudiante = result;
     });
   }


  }


