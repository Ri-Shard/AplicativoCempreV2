import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-estudiante-perfil',
  templateUrl: './estudiante-perfil.component.html',
  styleUrls: ['./estudiante-perfil.component.css']
})
export class EstudiantePerfilComponent implements OnInit {
  estudiantes:Estudiante[];
  estudiante:Estudiante;
  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
      this.estudianteService.getId(id).subscribe(result =>{
        this.estudiante = result;
      });  

 
   }

}
