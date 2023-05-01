import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Outfit } from './outfit';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  private apiUrl: string = environment.baseUrl + 'outfits';

  constructor(private http: HttpClient) { }

  getOutfits(): Observable<Outfit[]> {
    return this.http.get<Outfit[]>(this.apiUrl);
  }

}
