import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tiendafisica } from './tiendafisica';

@Injectable({
  providedIn: 'root'
})
export class TiendafisicaService {
  private apiUrl: string = environment.baseUrl + 'tiendasFisicas';

  constructor(private http: HttpClient) { }

  getTiendasFisicas(): Observable<Tiendafisica[]> {
    return this.http.get<Tiendafisica[]>(this.apiUrl);
  }

}
