import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/estudiante';
import { EstudianteService } from "../../services/estudiante.service";
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-estudiante-registro',
  templateUrl: './estudiante-registro.component.html',
  styleUrls: ['./estudiante-registro.component.css']
})
export class EstudianteRegistroComponent implements OnInit {
  formGroup: FormGroup;
  estudiante: Estudiante;
   mostrar = false;
   mostrar2= false;
   mostrar3= false;
   mostrar4= false;
  constructor(private _estudianteService: EstudianteService,  private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.buildForm();
  }
  buildForm() {
    this.formGroup = this.formBuilder.group({
      identificacion: ['', Validators.required],
      nombres: ['', Validators.required],
       apellido: ['', Validators.required],
       telefono: ['', Validators.required],
       sexo: ['', Validators.required],
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
    console.warn(this.formGroup.value);
    this.add();
    }
    add() {
      this.estudiante = this.formGroup.value;
      localStorage.setItem('datos', JSON.stringify(this.estudiante));
    }

    //mensajes validaciones
    get identificacioninvalido() {
      return this.formGroup.get('identificacion').invalid && this.formGroup.get('identificacion').touched;
    } 
    get nombreinvalido() {
      return this.formGroup.get('nombres').invalid && this.formGroup.get('nombres').touched;
    }
    get apellidoinvalido() {
      return this.formGroup.get('apellido').invalid && this.formGroup.get('apellido').touched;
    }
    get telefinvalido() {
      return this.formGroup.get('telefono').invalid && this.formGroup.get('telefono').touched;
    }
    get sexoinvalido() {
      return this.formGroup.get('sexo').invalid && this.formGroup.get('sexo').touched;
    }
    get correoinvalido() {
      return this.formGroup.get('correo').invalid && this.formGroup.get('correo').touched;
    }
}

