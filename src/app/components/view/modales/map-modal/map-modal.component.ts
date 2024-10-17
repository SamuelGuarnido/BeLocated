import { Component, Inject, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Establishment } from 'src/app/components/interfaces/establisment';

@Component({
  selector: 'app-map-modal',
  templateUrl: './map-modal.component.html',
  styleUrls: ['./map-modal.component.scss'],
  standalone: true,
  imports: [MatDialogModule]
})
export class MapModalComponent implements OnInit {
  private map!: L.Map;

  constructor(private dialogRef: MatDialogRef<MapModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    const lat = this.data.latitude;
    const lng = this.data.longitude;
    const site = this.data.site;
    if (lat && lng) {
      // Abre el mapa después de que el modal se haya abierto
      this.dialogRef.afterOpened().subscribe(() => {
        this.initMap(lat, lng, site);
      });
    }
  }


  initMap(lat: number, lng: number, site: Establishment) {
    if (isNaN(lat) || isNaN(lng)) {
      console.error("Latitud o longitud no válidas para el establecimiento:", site);
      return; // Salir de la función si no están válidos
    }

    const name = site.tags.name || 'Unnamed Establishment';

    // Inicializar el mapa solo si no está inicializado
    if (!this.map) {
        this.map = L.map('map').setView([lat, lng], 15);

        // Agregar una capa de mapa
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(this.map);
    } else {
        // Cambiar la vista del mapa si ya está inicializado
        this.map.setView([lat, lng], 15);
    }

    // Agregar un marcador
    const myIcon = L.icon({
        iconUrl: 'assets/leaflet/marker-icon.png',
        shadowUrl: 'assets/leaflet/marker-shadow.png',
    });

    L.marker([lat, lng], { icon: myIcon }).addTo(this.map)
        .bindPopup(name)
        .openPopup();
  }

  close() {
    this.dialogRef.close();
  }
}
