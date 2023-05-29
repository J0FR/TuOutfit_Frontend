import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Outfit } from './outfit';
import { Observable } from 'rxjs';
import { OutfitDetail } from './outfitDetail';


@Injectable({
  providedIn: 'root'
})
export class OutfitService {

  private apiUrl: string = environment.baseUrl + 'outfits';

  constructor(private http: HttpClient) { }

  getOutfits(): Observable<OutfitDetail[]> {
    return this.http.get<OutfitDetail[]>(this.apiUrl);
  }

  getOutfitsById(outfitId: number): Observable<OutfitDetail> {
    return this.http.get<OutfitDetail>(`${this.apiUrl}/${outfitId}`);
  }
}
