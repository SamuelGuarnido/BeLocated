import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogContent } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.component.html',
  styleUrls: ['./reorder.component.scss'],
  standalone: true,
  imports: [
    MatDialogContent, IonicModule, MatCheckboxModule, MatLabel, FormsModule, CommonModule
  ]
})
export class ReorderComponent  implements OnInit {

  alphabetOrder = false;
  proximityOrder = false;

  order = [
    { label: 'Alphabet', selected: false },
    { label: 'Proximity', selected: false },
  ];

  constructor(
    public dialogRef: MatDialogRef<ReorderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {console.log("")}

  close(): void {
    this.dialogRef.close(this.data.selectedOrder); // Devolver datos al cerrar
  }

  applyOrder() {
    const selectedOrders = this.order.filter(orderItem => orderItem.selected);
    this.dialogRef.close(selectedOrders); // Devolver solo las órdenes seleccionadas
  }


}
