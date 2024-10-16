import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter } from '@ionic/angular/standalone';
import { AuthService } from '../components/services/auth-service/auth.service';

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
export class HomePage {
  constructor(private authService: AuthService, private router: Router) { }

  onLoginGuest(){
    this.authService.logAsGuest();
    this.router.navigate(["inApp"]);
  }
}
