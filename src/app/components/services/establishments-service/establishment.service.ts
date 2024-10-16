import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Establishment } from '../../interfaces/establisment';

@Injectable({
  providedIn: 'root'
})

export class EstablishmentService {
  private apiUrl = 'https://overpass-api.de/api/interpreter';

  establishments: Establishment[] = [];

  constructor(private http: HttpClient) {}

  getNearbyEstablishments(lat: number, lon: number, radius: number, types: string[]): Observable<any> {
    const query = `
      [out:json];
      (
        node["amenity"~"${types.join('|')}"](around:${radius},${lat},${lon});
        way["amenity"~"${types.join('|')}"](around:${radius},${lat},${lon});
        relation["amenity"~"${types.join('|')}"](around:${radius},${lat},${lon});
      );
      out body;
    `;
    const params = new HttpParams().set('data', query);

    return this.http.get<any>(this.apiUrl, { params });
  }

}
