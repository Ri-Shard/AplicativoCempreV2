import { Pipe, PipeTransform } from '@angular/core';
import { Estudiante } from '../Solicitud/models/estudiante';

@Pipe({
  name: 'filtroxEmpresas'
})
export class FiltroxEmpresasPipe implements PipeTransform {

  transform(estudiante: Estudiante[], empresa: string): any {
    if(empresa==null) return estudiante;     
    return estudiante.filter(p =>
      p.empresaID.toLowerCase()
     .indexOf(empresa.toLowerCase()) !== -1);
     
  }

}
