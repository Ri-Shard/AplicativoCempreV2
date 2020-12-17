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
  mostrar= true;
  mostrarm= true;
  mostrarf= false;
  mes:string;
  image:string;
  nit:string;
  constructor(private estudianteService: EstudianteService,private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    
    this.estudianteService.getId(id).subscribe(result =>{
      this.estudiante = result;
      if (this.estudiante != null) {
        if(this.estudiante.estado == 'Esperando Pago'){
          document.getElementById('pago').style.display = 'block';
           }else{
            document.getElementById('pago').style.display = 'none';
         }
        if(this.estudiante.sexo == 'M'){
          document.getElementById('mp').style.display = 'block';
        }else{
          document.getElementById('fp').style.display = 'block';
       }
      } else {
      }

    }); 

   }


   add(){
    this.nit = JSON.parse(localStorage.getItem('nit'));
     this.estudiante.empresaID = this.nit ;
     this.estudianteService.put(this.estudiante).subscribe(result =>{
      this.estudiante = result;
     });
   }
   sexop(){

   }
       currentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
        this.mes = String(month);
        switch( this.mes) { 
          case "1": { 
             return "Enero"; 
             break; 
          } 
          case "2": { 
            return "Febrero"; 
            break; 
          } 
          case "3": { 
            return "Marzo"; 
            break; 
          } 
          case "4": { 
            return "Abril"; 
            break; 
          } 
          case "5": { 
            return "Mayo"; 
            break; 
          } 
          case "6": { 
            return "Junio"; 
            break; 
          } 
          case "7": { 
            return "Julio"; 
            break; 
          } 
          case "8": { 
            return "Agosto"; 
            break; 
          } 
          case "9": { 
            return "Septiembre"; 
            break; 
          } 
          case "10": { 
            return "Octubre"; 
            break; 
          } 
          case "11": { 
            return "Noviembre"; 
            break; 
          } 
          case "12": { 
            return "Diciembre"; 
            break; 
          } 
          default: { 
             //statements; 
             break; 
          } 
       } 
    }



}
