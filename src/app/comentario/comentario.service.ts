import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
}
