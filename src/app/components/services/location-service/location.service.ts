import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  isLoading = false;
  city = "";
  latString = 0;
  lonString = 0;

  constructor(private http: HttpClient) { }

  reverseGeocode(lat:number , lon:number): Observable<any> {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&addressdetails=1`;
    return this.http.get(apiUrl);
  }

  async getLocation() {
    try {
      this.isLoading = false; // Muestra el indicador de carga

      const { coords } = await Geolocation.getCurrentPosition();
      const lat = 37.3828300;
      const lon = -5.9731700;

      this.latString = coords.latitude;
      this.lonString = coords.longitude;

      console.log("latString: ", this.latString, this.lonString);

      //this.reverseGeocode(this.latString, this.lonString).subscribe({
        this.reverseGeocode(lat, lon).subscribe({
        next: (data: any) => {
          const currentCity = data.address.city;

          if (this.city === '' || this.city !== currentCity) {
            this.city = currentCity;
            //this.setBackgroundImage(this.city); // Cargar la imagen de fondo
            console.log("LOCATION :", this.city);
          }
        },
        error: (error) => console.error('Error during reverse geocoding:', error),
        complete: () => {
          console.log("Reverse geocoding request complete.");
        },
      });
    } catch (error) {
       // Oculta el indicador de carga en caso de error
      console.error('Error getting location:', error);
    }
  }
}
