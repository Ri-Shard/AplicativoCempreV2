import { Component, OnInit } from '@angular/core';
import { Empresa } from '../models/empresa';
import { EmpresaService } from "../../services/empresa.service";
import { PaisService } from "../../services/pais.service";
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Pais } from '../models/pais';
@Component({
  selector: 'app-empresa-registro',
  templateUrl: './empresa-registro.component.html',
  styleUrls: ['./empresa-registro.component.css']
})
export class EmpresaRegistroComponent implements OnInit {
  formGroup: FormGroup;
  empresa: Empresa;
  paises: Pais[];
  pais: Pais;
  constructor(private _empresaService: EmpresaService,private _paisService: PaisService,  private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
    this._paisService.get().subscribe(result =>{
      this.paises = result;
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
      this.empresa = this.formGroup.value;
      this._empresaService.post(this.empresa).subscribe(p => {
        if (p != null) {
          this.empresa = p;
         alert('Empresa Creada!');
        } else {
           alert('ERROR REVISE LOS CAMPOS!');
        }
      });
    }
    buildForm() {
      this.formGroup = this.formBuilder.group({
        razonSocial: ['', Validators.required],
        nit: ['', Validators.required],
        pais: ['', Validators.required],
        departamento: ['', Validators.required],
        ciudad: ['', Validators.required],
        direccion: ['', Validators.required],
        sector: ['', Validators.required],
        descripcion: ['', Validators.required],
        nombreRepresentante: ['', Validators.required],
        apellidoRepresentante: ['', Validators.required],
        cedulaRepresentante: ['', Validators.required], 
      }); 
      }
    get razoninvalido() {
      return this.formGroup.get('razonSocial').invalid && this.formGroup.get('razonSocial').touched;
    } 
    get nitinvalido() {
      return this.formGroup.get('nit').invalid && this.formGroup.get('nit').touched;
    }
    get paisinvalido() {
      return this.formGroup.get('pais').invalid && this.formGroup.get('pais').touched;
    }
    get deptoinvalido() {
      return this.formGroup.get('departamento').invalid && this.formGroup.get('departamento').touched;
    }
    get ciudadinvalido() {
      return this.formGroup.get('ciudad').invalid && this.formGroup.get('ciudad').touched;
    }
    get direccionCinvalido() {
      return this.formGroup.get('direccion').invalid && this.formGroup.get('direccion').touched;
    }
    get sectorinvalido() {
      return this.formGroup.get('sector').invalid && this.formGroup.get('sector').touched;
    }
    get descripcioninvalido() {
      return this.formGroup.get('descripcion').invalid && this.formGroup.get('descripcion').touched;
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

}


