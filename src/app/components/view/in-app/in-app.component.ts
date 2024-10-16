import { Component, OnInit } from '@angular/core';


import { IonContent, IonCard, IonButton, IonIcon } from "@ionic/angular/standalone";

@Component({
  selector: 'app-in-app',
  templateUrl: './in-app.component.html',
  styleUrls: ['./in-app.component.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonButton, IonIcon,
  ]
})
export class InAppComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("inApp")
  }

}
