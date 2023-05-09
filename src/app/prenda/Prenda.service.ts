import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { Prenda } from './prenda';

@Injectable({
  providedIn: 'root'
})
export class PrendaService {

  private apiurl = environment.baseUrl + 'prenda';

  constructor(private http: HttpClient) { }

  getPrendas() : Observable<Prenda[]>{
    return this.http.get<Prenda[]>(this.apiurl);
  }

}
