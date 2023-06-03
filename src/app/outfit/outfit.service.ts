import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createOutfits(formData: any): Observable<Outfit[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json' // Set the content type to JSON if required by the API
    });

    console.log(formData);
    return this.http.post<Outfit[]>(this.apiUrl, formData, { headers: headers });
  }

  getOutfits(): Observable<OutfitDetail[]> {
    return this.http.get<OutfitDetail[]>(this.apiUrl);
  }

  getOutfitsById(outfitId: number): Observable<OutfitDetail> {
    return this.http.get<OutfitDetail>(`${this.apiUrl}/${outfitId}`);
  }
}
