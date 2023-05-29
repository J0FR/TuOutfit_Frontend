import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { PrendaDetail } from './prenda-detail/PrendaDetail';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  private apiurl = environment.baseUrl + 'prenda';

  constructor(private http: HttpClient) { }

  getPrendas() : Observable<PrendaDetail[]>{
    return this.http.get<PrendaDetail[]>(this.apiurl);
  }

  getPrendaById(prendaId: number): Observable<PrendaDetail> {
    return this.http.get<PrendaDetail>(`${this.apiurl}/${prendaId}`);
  }

}
