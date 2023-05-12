import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  URL = 'http://localhost:8080/educ'

  constructor(private HttpClient : HttpClient) { }


  public lista(): Observable<Educacion[]>{
    return this.HttpClient.get<Educacion[]>(this.URL + '/lista');
  }

  public detail(id: number): Observable<Educacion>{
    return this.HttpClient.get<Educacion>(this.URL + `/detail/${id}`);
  }

  public save(Educacion: Educacion): Observable<any>{
    return this.HttpClient.post<any>(this.URL + '/create', Educacion);
  }

  public update(id: number, Educacion: Educacion): Observable<any>{
    return this.HttpClient.put<any>(this.URL + `/update/${id}`, Educacion);
  }

  public delete(id: number): Observable<any>{
    return this.HttpClient.delete<any>(this.URL + `/delete/${id}`);
  }
}
