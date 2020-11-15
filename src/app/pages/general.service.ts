import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ResponseHttp } from '../models/response-http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  api = environment.api;

  constructor( private http: HttpClient ) { }

  getComic( idComic: number ): Observable<ResponseHttp> {
    return this.http.get<ResponseHttp>( `${this.api}comic/${idComic}` );
  }
}
