import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/Solicitud/models/empresa';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit {
    formGroup: FormGroup;
    empresa: Empresa;

    constructor(private _empresaService: EmpresaService,  private formBuilder: FormBuilder) {}
  
    ngOnInit() {
      this.buildForm();
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
        this.empresa = JSON.parse(localStorage.getItem('datos'));
        this.empresa.descripcion = this.formGroup.value.descripcion;
        localStorage.setItem('descripcion', JSON.stringify(this.empresa));
      }
      buildForm() {
        this.formGroup = this.formBuilder.group({
          descripcion: ['', Validators.required],
        }); 
        }
      get descripcioninvalido() {
        return this.formGroup.get('descripcion').invalid && this.formGroup.get('descripcion').touched;
      }

  
  }
  
  
  


