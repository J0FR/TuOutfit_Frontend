import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Marca } from './marca';


@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private apiUrl: string = environment.baseUrl + 'marcas';

constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.apiUrl);
  }

}
