import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import {EstudianteService} from "../../services/estudiante.service";
@Component({
  selector: 'app-estudiante-consulta',
  templateUrl: './estudiante-consulta.component.html',
  styleUrls: ['./estudiante-consulta.component.css']
})
export class EstudianteConsultaComponent implements OnInit {

estudiantes:Estudiante[];
  constructor(private estudianteService: EstudianteService) { }

  ngOnInit() {
     this.get;
   }

   get(){
     this.estudianteService.get().subscribe(result =>{
       this.estudiantes = result;
     });
   }
  }


