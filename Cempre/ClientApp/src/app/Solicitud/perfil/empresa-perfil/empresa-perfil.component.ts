import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Empresa } from '../../models/empresa';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-empresa-perfil',
  templateUrl: './empresa-perfil.component.html',
  styleUrls: ['./empresa-perfil.component.css']
})
export class EmpresaPerfilComponent implements OnInit {

  empresa:Empresa;
  estudiantes: Estudiante[];
  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute,private empresaService: EmpresaService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.empresaService.getId(id).subscribe(result =>{
      this.empresa = result;
    });  
    this.estudianteService.get().subscribe(result =>{
      this.estudiantes = result;
    });  
   }

   local(){
     localStorage.setItem('nit',this.empresa.nit);
   }

}
