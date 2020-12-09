import { Empresa } from './../Solicitud/models/empresa';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

const httpOptionsPut = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    responseType: 'text'
  };
  
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
@Injectable({
    providedIn: 'root'
  })
  export class EmpresaService {
  
    baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleHttpErrorService)
    {
        this.baseUrl = baseUrl;
    }
  
    get(): Observable<Empresa[]> {
      return this.http.get<Empresa[]>(this.baseUrl + 'api/Empresa')
          .pipe(
              tap(_ => this.handleErrorService.log('datos recibidos')),
              catchError(this.handleErrorService.handleError<Empresa[]>('Consulta Empresa', null))
          );
    }
  
    post(empresa: Empresa): Observable<Empresa> {
      return this.http.post<Empresa>(this.baseUrl + 'api/Empresa', empresa)
          .pipe(
              tap(_ => this.handleErrorService.log('datos enviados')),
              catchError(this.handleErrorService.handleError<Empresa>('Registrar empresa', null))
          );
  
  }

    /** PUT: update  on the server */
    put(empresa: Empresa): Observable<any> {
        const url = `${this.baseUrl}api/Empresa/${empresa.nit}`;
        return this.http.put(url, empresa, httpOptions)
          .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<any>('Editar Empresa'))
          );
      }
    }
