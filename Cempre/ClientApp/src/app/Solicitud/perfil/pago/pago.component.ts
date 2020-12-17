import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
  estudiantes:Estudiante[];
  estudiante:Estudiante;
  id: string;
  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute ) { }


  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    
      this.estudianteService.getId(this.id).subscribe(result =>{
        this.estudiante = result;
      });  
   }

   pagar()
   {
     this.estudiante.estado = 'Disponible'; 
     this.estudianteService.put(this.estudiante).subscribe(p => {
    });
   }
}
