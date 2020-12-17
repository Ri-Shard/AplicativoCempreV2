import { Estudiante } from './../Solicitud/models/estudiante';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  export class EstudianteService {
  
    baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleHttpErrorService)
    {
        this.baseUrl = baseUrl;
    }
  
    get(): Observable<Estudiante[]> {
      return this.http.get<Estudiante[]>(this.baseUrl + 'api/Estudiante')
    }
  
    post(estudiante: Estudiante): Observable<Estudiante> {
      return this.http.post<Estudiante>(this.baseUrl + 'api/Estudiante', estudiante)
          .pipe(
              tap(_ => this.handleErrorService.log('Registro Realizado satisfactoriamente')),
              catchError(this.handleErrorService.handleError<Estudiante>('Registrar estudiante', null))
          );
  }
      getId(id: string): Observable<Estudiante> {
        const url = `${this.baseUrl + 'api/Estudiante'}/${id}`;
        return this.http.get<Estudiante>(url, httpOptions)

      }
      getIdE(nit: string): Observable<Estudiante[]> {       
        const url = `${this.baseUrl + 'api/Solicitud'}/${nit}`;
        return this.http.get<Estudiante[]>(url,httpOptions)
      }
      
  put(estudiante: Estudiante): Observable<any> {
    const url = `${this.baseUrl}api/Estudiante/${estudiante.identificacion}`;
    return this.http.put(url, estudiante, httpOptions)
      .pipe(
        tap(_ => this.handleErrorService.log('Pago Realizado')),
        catchError(this.handleErrorService.handleError<any>('Editar Restaurante'))
      );
  }
  
  }
  
