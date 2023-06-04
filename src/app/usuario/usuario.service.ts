import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UsuarioDetail } from './usuario-detail';
import { Usuario } from './usuario';
import { OutfitDetail } from '../outfit/outfitDetail';

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

  getOutfitsUsuario(idUsuario: number): Observable<OutfitDetail[]> {
    return this.http.get<OutfitDetail[]>(this.apiUrl + "/" + idUsuario +"/outfits");
  }

  getUsuarioInstante(idUsuario: number): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(`${this.apiUrl}/${idUsuario}`);
  }

  postUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  likeOutfit(idOutfit: number, idUsuario: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${idUsuario}/outfits/${idOutfit}`, {});
  }

  IsAuth(): boolean {
    if (localStorage.getItem('isAuth') == 'false') {
      this.isAuth = false;
    } else {
      this.isAuth = true;
    }
    return this.isAuth;
  }

  logOut(): void {
    localStorage.setItem('isAuth', 'false');
  }


}
