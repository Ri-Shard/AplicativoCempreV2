import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Empresa } from 'src/app/Solicitud/models/empresa';
@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit {
    formGroup: FormGroup;
    empresa: Empresa;
     constructor(private _empresaService: EmpresaService, private formBuilder: FormBuilder) {}
  
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
        this.empresa = JSON.parse(localStorage.getItem('descripcion'));
        this.empresa.nombreRepresentante = this.formGroup.value.nombreRepresentante;
        this.empresa.apellidoRepresentante = this.formGroup.value.apellidoRepresentante;
        this.empresa.cedulaRepresentante = this.formGroup.value.cedulaRepresentante;
        this.empresa.password = this.formGroup.value.password;
        console.warn(this.empresa);
        this._empresaService.post(this.empresa).subscribe(p => {
          if (p != null) {
            this.empresa = p;
            localStorage.clear();
          } else {
             alert('ERROR REVISE LOS CAMPOS!');
          }
        });
      }
      buildForm() {
        this.formGroup = this.formBuilder.group({           
          nombreRepresentante: ['', Validators.required],
          apellidoRepresentante: ['', Validators.required],
          cedulaRepresentante: ['', Validators.required],  
          password: ['', Validators.required],
          estado:['Solicitando']  
        }); 
        }
      get nombreRinvalido() {
        return this.formGroup.get('nombreRepresentante').invalid && this.formGroup.get('nombreRepresentante').touched;
      }
      get apellidoRinvalido() {
        return this.formGroup.get('apellidoRepresentante').invalid && this.formGroup.get('apellidoRepresentante').touched;
      }
      get cedulaRinvalido() {
        return this.formGroup.get('cedulaRepresentante').invalid && this.formGroup.get('cedulaRepresentante').touched;
      }
      get passwordinvalido() {
        return this.formGroup.get('password').invalid && this.formGroup.get('password').touched;
      }
      
  }
  

