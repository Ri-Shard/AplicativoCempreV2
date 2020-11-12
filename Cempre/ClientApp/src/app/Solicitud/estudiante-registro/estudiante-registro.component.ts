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
      nombre: ['', Validators.required],
      sexo: ['', Validators.required],
      edad: ['', Validators.required],
      semestre: [10, Validators.required],
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
      this.add();
      }

      get identificacioninvalido() {
        return this.formGroup.get('identificacion').invalid && this.formGroup.get('identificacion').touched;
      }
      get nombreinvalido() {
        return this.formGroup.get('nombre').invalid && this.formGroup.get('nombre').touched;
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

