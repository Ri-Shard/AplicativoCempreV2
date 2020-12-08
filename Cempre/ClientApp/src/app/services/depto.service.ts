import { Depto } from './../Solicitud/models/depto';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';

@Injectable({
    providedIn: 'root'
  })
  export class DeptoService {
  
    baseUrl: string;
    constructor(
        private http: HttpClient,
        @Inject('BASE_URL') baseUrl: string,
        private handleErrorService: HandleHttpErrorService)
    {
        this.baseUrl = baseUrl;
    }
  
    get(): Observable<Depto[]> {
      return this.http.get<Depto[]>(this.baseUrl + 'api/Depto')
          .pipe(
              tap(_ => this.handleErrorService.log('datos depto recibidos')),
              catchError(this.handleErrorService.handleError<Depto[]>('Consulta Depto', null))
          );
    }

  
  }
  
