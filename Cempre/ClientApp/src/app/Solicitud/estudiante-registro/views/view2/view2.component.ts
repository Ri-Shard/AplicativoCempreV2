import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/Solicitud/models/estudiante';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class Rview2Component implements OnInit {

  constructor(private _estudianteService: EstudianteService,    private location: Location
    ,  private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  formGroup: FormGroup;
  estudiante: Estudiante;
  estudianteda: Estudiante;
  estudiantede: Estudiante;

   mostrar = false;
   mostrar2= false;
   mostrar3= false;
   mostrar4= false;
   mostrarb= false;

  buildForm() {
    this.formGroup = this.formBuilder.group({
       semestre: ['', Validators.required],
       carrera: ['', Validators.required],
       invOproyec: ['',],
       conocimientoyprac: ['',],
       seminarios: ['',],
       distinciones: ['',], 
      password: ['',Validators.required], 
      estado: ['Esperando Pago'] ,
    }); 
    }

    get control() {
      return this.formGroup.controls;
    }
  onSubmit() {
    if (this.formGroup.invalid) {
    return Object.values(this.formGroup.controls).forEach(control => {
      control.markAllAsTouched();
    });
    }
    this.add();
    }
    add() {
      this.estudiante = this.formGroup.value;
      this.estudianteda = JSON.parse(localStorage.getItem('datos'));
      this.estudiantede = JSON.parse(localStorage.getItem('descripcion'));

      this.estudiante.apellido = this.estudianteda.apellido;
      this.estudiante.correo = this.estudianteda.correo;
      this.estudiante.identificacion = this.estudianteda.identificacion;
      this.estudiante.nombres = this.estudianteda.nombres;
      this.estudiante.sexo = this.estudianteda.sexo;
      this.estudiante.telefono = this.estudianteda.telefono;
      this.estudiante.ciudadNacimiento = this.estudiantede.ciudadNacimiento;
      this.estudiante.estadoCivil = this.estudiantede.estadoCivil;
      this.estudiante.eps = this.estudiantede.eps;
      this.estudiante.fechaNacimiento = this.estudiantede.fechaNacimiento;

      console.warn(this.estudiante);
       this._estudianteService.post(this.estudiante).subscribe(p => {
        if (p != null) {
          this.estudiante = p;
        } else {
           alert('ERROR REVISE LOS CAMPOS!');
        }
      });

    }

    //mensajes validaciones
    get invOproyecinvalido() {
      return this.formGroup.get('invOproyec').invalid && this.formGroup.get('invOproyec').touched;
    }
    get conocimientoypracinvalido() {
      return this.formGroup.get('conocimientoyprac').invalid && this.formGroup.get('conocimientoyprac').touched;
    }
    get seminariosinvalido() {
      return this.formGroup.get('seminarios').invalid && this.formGroup.get('seminarios').touched;
    }
    get distincionesinvalido() {
      return this.formGroup.get('distinciones').invalid && this.formGroup.get('distinciones').touched;
    }
    get semestreinvalido() {
      return this.formGroup.get('semestre').invalid && this.formGroup.get('semestre').touched;
    }
    get passwordinvalido() {
      return this.formGroup.get('password').invalid && this.formGroup.get('password').touched;
    }
    get carrerainvalido() {
      return this.formGroup.get('carrera').invalid && this.formGroup.get('carrera').touched;
    }

}


