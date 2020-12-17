import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../Solicitud/models/estudiante';

@Pipe({
  name: 'filtroxEstado'
})
export class FiltroxEstadoPipe implements PipeTransform {

  transform(estudiante: Estudiante[], estado: string): any {
    if(estado==null) return estudiante;     
    return estudiante.filter(p =>
      p.estado.toLowerCase()
     .indexOf(estado.toLowerCase()) !== -1);
     
  }

}
