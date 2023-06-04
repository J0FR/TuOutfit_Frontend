import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Comentario } from './comentario';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private apiUrl = environment.baseUrl + 'comentarios';

  constructor(private http: HttpClient) { }

  getComentarios(): Observable<Comentario[]> {
    return this.http.get<Comentario[]>(this.apiUrl);
  }

  createComentario(formData: any): Observable<Comentario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set the content type to JSON if required by the API
    });

    console.log(formData);
    return this.http.post<Comentario>(this.apiUrl, formData, { headers: headers });
  }


}
