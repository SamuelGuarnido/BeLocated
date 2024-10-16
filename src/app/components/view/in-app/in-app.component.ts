import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

import { Geolocation } from '@capacitor/geolocation';
import { EstablishmentService } from '../../services/establishments-service/establishment.service';
import { Establishment } from '../../interfaces/establisment';
import { Coords } from '../../interfaces/coords';
import { FilterComponent } from '../modales/filter/filter.component';
import { PopoverController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-in-app',
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, MatCardModule, MatIconModule, MatFormField, MatDialogModule]
})
export class InAppComponent implements OnInit {
  searchQuery: string = '';

  coords?: Coords;
  isLoadingEstablishments = false;
  establishments: Establishment[] = [];
  selectedTypes: string[] = [];

  amenityTranslations: { [key: string]: string } = {
    restaurant: 'Restaurante',
    cafe: 'Cafetería',
    bar: 'Bar',
    fast_food: 'Comida Rápida',
    pub: 'Pub',
    ice_cream: 'Heladería',
    food_court: 'Patio de Comidas',
    marketplace: 'Mercado',
    bank: 'Banco',
    atm: 'Cajero Automático',
    pharmacy: 'Farmacia',
    post_office: 'Oficina de Correos',
    bicycle_repair_station: 'Estación de Reparación de Bicicletas',
    car_rental: 'Alquiler de Coches',
    hospital: 'Hospital',
    clinic: 'Clínica',
    dentist: 'Dentista',
    doctors: 'Doctores',
    veterinary: 'Veterinario',
    fire_station: 'Estación de Bomberos',
    police: 'Policía',
    emergency_phone: 'Teléfono de Emergencia',
    school: 'Escuela',
    university: 'Universidad',
    kindergarten: 'Jardín de Infantes',
    college: 'Colegio',
    bus_station: 'Estación de Autobuses',
    ferry_terminal: 'Terminal de Ferris',
    taxi: 'Taxi',
    bicycle_parking: 'Estacionamiento de Bicicletas',
    charging_station: 'Estación de Carga',
    place_of_worship: 'Lugar de Culto',
    grave_yard: 'Cementerio',
    theatre: 'Teatro',
    cinema: 'Cine',
    arts_centre: 'Centro de Artes',
    library: 'Biblioteca',
    nightclub: 'Club Nocturno',
    fountain: 'Fuente',
    gym: 'Gimnasio',
    sports_centre: 'Centro Deportivo',
    swimming_pool: 'Piscina',
    stadium: 'Estadio',
    hotel: 'Hotel',
    hostel: 'Hostal',
    guest_house: 'Casa de Huéspedes',
    motel: 'Motel',
    camp_site: 'Camping',
    toilets: 'Baños',
    shower: 'Duchas',
    drinking_water: 'Agua Potable',
    waste_disposal: 'Disposición de Residuos',
    recycling: 'Reciclaje',
    shelter: 'Refugio',
    post_box: "Buzón de correos"
  };


  desiredAmenities: string[] = [
    // Alimentos y Bebidas
    'restaurant', 'cafe', 'bar', 'fast_food', 'pub', 'ice_cream', 'food_court',

    // Compras y Servicios
    'marketplace', 'bank', 'atm', 'pharmacy', 'post_office', 'bicycle_repair_station', 'car_rental',

    // Salud y Emergencias
    'hospital', 'clinic', 'dentist', 'doctors', 'veterinary', 'fire_station', 'police', 'emergency_phone',

    // Educación
    'school', 'university', 'kindergarten', 'college',

    // Transporte
    'bus_station', 'ferry_terminal', 'taxi', 'bicycle_parking', 'charging_station',

    // Religión
    'place_of_worship', 'grave_yard',

    // Cultura y Ocio
    'theatre', 'cinema', 'arts_centre', 'library', 'nightclub', 'fountain',

    // Deportes
    'gym', 'sports_centre', 'swimming_pool', 'stadium',

    // Alojamiento
    'hotel', 'hostel', 'guest_house', 'motel', 'camp_site',

    // Otros Servicios Públicos
    'toilets', 'shower', 'drinking_water', 'waste_disposal', 'recycling', 'shelter'
  ];




  constructor(
    private establishmentService: EstablishmentService,
    private dialog: MatDialog
  ) { }

  async ngOnInit() {
    if(this.establishmentService.establishments.length < 1){
      try {
        this.coords = (await Geolocation.getCurrentPosition()).coords;
        console.log("COORDS: " + this.coords.latitude + ", " + this.coords.longitude);
        if (this.coords) {
          this.isLoadingEstablishments = true; // Inicia la carga aquí
          await this.getEstablishments(); // Cambia a await
        }
      } catch (error) {
        console.error("Error getting location:", error);
        this.isLoadingEstablishments = false; // Finaliza la carga si hay error
      }
    }
    else{
      this.isLoadingEstablishments = false;
      this.establishments = this.establishmentService.establishments;
    }
  }

  async getEstablishments(): Promise<void> { // Cambiado a async

    this.isLoadingEstablishments = true;
    const lat = this.coords?.latitude ?? 37.38283; // Utiliza coordenadas obtenidas
    const lng = this.coords?.longitude ?? -5.97317;
    console.log("COORDS: " + lat + ", " + lng);
    const radius = 4000; // Radio en metros

    this.establishmentService.getNearbyEstablishments(lat, lng, radius, this.selectedTypes)
      .subscribe({
        next: (response: any) => {
          this.establishments = response.elements.filter((element: Establishment) => {
            const amenity = element.tags.amenity;
            return this.desiredAmenities.includes(amenity);
          });

          // Si no hay establecimientos, imprimir un mensaje
          if (this.establishments.length === 0) {
            console.log('No establishments found.');
          } else {
            console.log('Establishments found:', this.establishments);
          }

          // Si deseas agregar el nombre de la etiqueta a los establecimientos
          this.establishments = this.establishments.map((element: Establishment) => {
            const name = element.tags.name || this.amenityTranslations[element.tags.amenity];
            return {
              ...element,
              tags: {
                ...element.tags,
                name
              }
            };
          });
        },
        error: (error) => {
          console.error('Error fetching establishments:', error);
        },
        complete: () => {
          console.log('Establishments fetch complete.');
          this.isLoadingEstablishments = false; // Finaliza la carga aquí
        }
      });
  }

  clearSearch() {
    this.searchQuery = '';
  }

  onFavoriteClick(site: Establishment) { }

  onMapClick(site: Establishment) { }

  async openFilterMenu() {
    const dialogRef = this.dialog.open(FilterComponent, {
      data: { selectedTypes: this.selectedTypes }, // Pasar tipos seleccionados actuales
      autoFocus: false,
      backdropClass: 'custom-backdrop'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.selectedTypes = result; // Actualizar los tipos seleccionados
        this.getEstablishments(); // Actualizar los establecimientos según los filtros
      }
    });
  }
}
