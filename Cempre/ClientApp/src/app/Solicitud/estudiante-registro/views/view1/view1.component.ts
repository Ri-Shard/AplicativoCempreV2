import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { Estudiante } from 'src/app/Solicitud/models/estudiante';
@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class Rview1Component implements OnInit {

  constructor(private _estudianteService: EstudianteService,  private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  formGroup: FormGroup;
  estudiante: Estudiante;

  buildForm() {
    this.formGroup = this.formBuilder.group({
       fechaNacimiento: ['', Validators.required],
       ciudadNacimiento: ['', Validators.required],
       estadoCivil: ['', Validators.required],
       eps: ['', Validators.required],
    }); 
    }

    currentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      return currentDate.toISOString().substring(0,10);
    }
    get control() {
      return this.formGroup.controls;
      this.formGroup.controls['fechaNacimiento'].setValue(this.currentDate());
    }
  onSubmit() {
    if (this.formGroup.invalid) {
    return Object.values(this.formGroup.controls).forEach(control => {
      control.markAllAsTouched();
    });
    }
    console.warn(this.formGroup.value);
    this.add();
    }
    add() {
      this.estudiante = JSON.parse(localStorage.getItem('datos'));
      this.estudiante = this.formGroup.value;
      localStorage.setItem('descripcion', JSON.stringify(this.estudiante));
    }

    //mensajes validaciones

    get fechainvalido() {
      return this.formGroup.get('fechaNacimiento').invalid && this.formGroup.get('fechaNacimiento').touched;
    }
    get ciudadNinvalido() {
      return this.formGroup.get('ciudadNacimiento').invalid && this.formGroup.get('ciudadNacimiento').touched;
    }
    get estadoCinvalido() {
      return this.formGroup.get('estadoCivil').invalid && this.formGroup.get('estadoCivil').touched;
    }
    
    get epsinvalido() {
      return this.formGroup.get('eps').invalid && this.formGroup.get('eps').touched;
    }

    
}

