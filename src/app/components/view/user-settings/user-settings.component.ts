import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';

import { IonicModule } from '@ionic/angular';
import { AuthService } from '../../services/auth-service/auth.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss'],
  standalone: true,
  imports:[
    IonicModule,
    RouterLink,
    MatIconModule,
    MatFabButton,
    MatButtonModule
  ]
})
export class UserSettingsComponent  implements OnInit {

  isGuest = false;

  constructor(private AuthService: AuthService) { }

  ngOnInit() {
    this.isGuest = this.AuthService.loggedAsGuest;
    console.log("inUserSettings")
  }

}
