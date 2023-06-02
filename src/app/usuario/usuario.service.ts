import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UsuarioDetail } from './usuario-detail';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = environment.baseUrl + 'usuarios';
  public isAuth: boolean = false;

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<UsuarioDetail[]> {
    return this.http.get<UsuarioDetail[]>(this.apiUrl);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  IsAuth(): boolean {
    return this.isAuth;
  }

  logOut(): void {
    this.isAuth = false;
  }


}
