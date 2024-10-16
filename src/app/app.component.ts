import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';


//FIREBASE
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from "./firebase-config";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    console.log("ANALYTICS: " + JSON.stringify(analytics.app))
  }
}
