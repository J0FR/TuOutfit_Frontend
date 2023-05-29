import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Marca } from './marca';
import { MarcaDetail } from './marcaDetail';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private apiUrl: string = environment.baseUrl + 'marcas';

constructor(private http: HttpClient) { }

  getMarcas(): Observable<MarcaDetail[]> {
    return this.http.get<MarcaDetail[]>(this.apiUrl);
  }

  getMarcasById(marcaId: number): Observable<MarcaDetail> {
    return this.http.get<MarcaDetail>(`${this.apiUrl}/${marcaId}`);
  }

}
