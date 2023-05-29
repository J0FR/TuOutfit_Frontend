import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tiendafisica } from './tiendafisica';
import { TiendafisicaDetail } from './tiendafisica-detail/TiendafisicaDetail';

@Injectable({
  providedIn: 'root'
})
export class TiendafisicaService {
  private apiUrl: string = environment.baseUrl + 'tiendasFisicas';

  constructor(private http: HttpClient) { }

  getTiendasFisicas(): Observable<Tiendafisica[]> {
    return this.http.get<Tiendafisica[]>(this.apiUrl);
  }

  getTiendaFisicaById(tiendaFisicaId: number): Observable<TiendafisicaDetail> {
    return this.http.get<TiendafisicaDetail>(`${this.apiUrl}/${tiendaFisicaId}`);
  }
}
