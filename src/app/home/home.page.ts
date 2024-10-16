import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter } from '@ionic/angular/standalone';
import { AuthService } from '../components/services/auth-service/auth.service';
import { EstablishmentService } from '../components/services/establishments-service/establishment.service';
import { Coords } from '../components/interfaces/coords';
import { Establishment } from '../components/interfaces/establisment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule,
    RouterLink
  ],
})
export class HomePage implements OnInit{

  establishments: Establishment[] = [];
  selectedTypes: string[] = [];
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

  constructor(private authService : AuthService,
    private router: Router,
    private establishmentService: EstablishmentService) {}

  async ngOnInit(){
    const coords: Coords = (await Geolocation.getCurrentPosition()).coords;
    this.establishmentService.getNearbyEstablishments(coords.latitude, coords.longitude, 100, this.selectedTypes)
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

          this.establishmentService.establishments = this.establishments;
        },
        error: (error) => {
          console.error('Error fetching establishments:', error);
        },
        complete: () => {
          console.log('Establishments fetch complete.');
        }
      });
    }

  onLoginGuest(){
    this.authService.logAsGuest();
    this.router.navigate(["inApp"]);
  }
}
