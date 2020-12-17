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
    empresasa: Empresa;
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
      this.add();
      }
      add() {
        this.empresa = this.formGroup.value;
        this.empresasa = JSON.parse(localStorage.getItem('descripcion'));

        this.empresa.ciudad = this.empresasa.ciudad;
        this.empresa.departamento = this.empresasa.departamento;
        this.empresa.descripcion = this.empresasa.descripcion;
        this.empresa.direccion = this.empresasa.direccion;
        this.empresa.nit = this.empresasa.nit;
        this.empresa.pais = this.empresasa.pais;
        this.empresa.razonSocial = this.empresasa.razonSocial;
        this.empresa.sector = this.empresasa.sector;

        console.warn(this.empresa);
        this._empresaService.post(this.empresa).subscribe(p => {
          if (p != null) {
            this.empresa = p;
          } else {
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
  

