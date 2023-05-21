import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UsuarioDetail } from './usuario-detail';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = environment.baseUrl + 'usuarios';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioDetail[]> {
    return this.http.get<UsuarioDetail[]>(this.apiUrl);
  }
}
