import { Component } from '@angular/core';
import { PopoverController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel } from '@angular/material/form-field';
import { MatDialogContent } from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';



@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [IonicModule, NgFor, FormsModule, CommonModule,
    MatListModule,
    MatCheckboxModule,
    MatButtonModule,
    MatLabel,
    MatDialogContent,
    MatExpansionModule
  ],
})
export class FilterComponent {
  showModal = false;

  types = [
    {
      category: 'Alimentos y Bebidas',
      items: [
        { label: 'Restaurante', type: 'restaurant', selected: false },
        { label: 'Cafetería', type: 'cafe', selected: false },
        { label: 'Bar', type: 'bar', selected: false },
        { label: 'Comida Rápida', type: 'fast_food', selected: false },
        { label: 'Pub', type: 'pub', selected: false },
        { label: 'Heladería', type: 'ice_cream', selected: false },
        { label: 'Patio de Comidas', type: 'food_court', selected: false },
      ]
    },
    {
      category: 'Compras y Servicios',
      items: [
        { label: 'Mercado', type: 'marketplace', selected: false },
        { label: 'Banco', type: 'bank', selected: false },
        { label: 'Cajero Automático', type: 'atm', selected: false },
        { label: 'Farmacia', type: 'pharmacy', selected: false },
        { label: 'Oficina de Correos', type: 'post_office', selected: false },
        { label: 'Estación de Reparación de Bicicletas', type: 'bicycle_repair_station', selected: false },
        { label: 'Alquiler de Coches', type: 'car_rental', selected: false },
      ]
    },
    {
      category: 'Salud y Emergencias',
      items: [
        { label: 'Hospital', type: 'hospital', selected: false },
        { label: 'Clínica', type: 'clinic', selected: false },
        { label: 'Dentista', type: 'dentist', selected: false },
        { label: 'Médicos', type: 'doctors', selected: false },
        { label: 'Veterinario', type: 'veterinary', selected: false },
        { label: 'Estación de Bomberos', type: 'fire_station', selected: false },
        { label: 'Policía', type: 'police', selected: false },
        { label: 'Teléfono de Emergencia', type: 'emergency_phone', selected: false },
      ]
    },
    // Agrega las otras categorías de forma similar
  ];


  constructor(
    public dialogRef: MatDialogRef<FilterComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  close(): void {
    this.dialogRef.close(this.data.selectedTypes); // Devolver datos al cerrar
  }

  toggleSelection(type: any): void {
    // Cambia el estado de selección del elemento clickeado
    type.selected = !type.selected;
  }


  async applyFilters() {
    const selectedTypes = this.types.flatMap(typeGroup =>
      typeGroup.items.filter(type => type.selected).map(type => type.type)
    );

    console.log('Selected types:', selectedTypes);
    this.dialogRef.close(selectedTypes); // Devuelve los tipos seleccionados al cerrar el diálogo
  }


}
