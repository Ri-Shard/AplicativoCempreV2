import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from "../../services/estudiante.service";
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.css']
})
export class EstudianteRegistroComponent implements OnInit {

  formGroup: FormGroup;
  estudiante: Estudiante;
  constructor(private _estudianteService: EstudianteService,  private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }

  add() {

    this.estudiante = this.formGroup.value;
    this._estudianteService.post(this.estudiante).subscribe(p => {
      if (p != null) {
        this.estudiante = p;
       alert('Estudiante creado!');

      } else {

      }
    });
  }
   buildForm() {
    this.formGroup = this.formBuilder.group({

      identificacion: ['', Validators.required],
      nombres: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      ciudadNacimiento: ['', Validators.required],
      estadoCivil: ['', Validators.required],
      telefono: ['', Validators.required],
      eps: ['', Validators.required],
       invOproyec: ['', Validators.required],
      conocimientoyprac: ['', Validators.required],
      seminarios: ['', Validators.required],
      distinciones: ['', Validators.required], 
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
       semestre: ['', Validators.required],
       correo: ['', Validators.required],

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
      console.log(this.formGroup);
      this.add();
      }

      get identificacioninvalido() {
        return this.formGroup.get('identificacion').invalid && this.formGroup.get('identificacion').touched;
      } 
      get nombreinvalido() {
        return this.formGroup.get('nombres').invalid && this.formGroup.get('nombres').touched;
      }
      get apellidoinvalido() {
        return this.formGroup.get('apellido').invalid && this.formGroup.get('apellido').touched;
      }
      get fechainvalido() {
        return this.formGroup.get('fechaNacimiento').invalid && this.formGroup.get('fechaNacimiento').touched;
      }
      get ciudadNinvalido() {
        return this.formGroup.get('ciudadNacimiento').invalid && this.formGroup.get('ciudadNacimiento').touched;
      }
      get estadoCinvalido() {
        return this.formGroup.get('estadoCivil').invalid && this.formGroup.get('estadoCivil').touched;
      }
      get telefinvalido() {
        return this.formGroup.get('telefono').invalid && this.formGroup.get('telefono').touched;
      }
      get epsinvalido() {
        return this.formGroup.get('eps').invalid && this.formGroup.get('eps').touched;
      }
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
      get edadinvalido() {
        return this.formGroup.get('edad').invalid && this.formGroup.get('edad').touched;
      }
      get sexoinvalido() {
        return this.formGroup.get('sexo').invalid && this.formGroup.get('sexo').touched;
      }
      get semestreinvalido() {
        return this.formGroup.get('semestre').invalid && this.formGroup.get('semestre').touched;
      }
       get correoinvalido() {
        return this.formGroup.get('correo').invalid && this.formGroup.get('correo').touched;
      }
  
}

