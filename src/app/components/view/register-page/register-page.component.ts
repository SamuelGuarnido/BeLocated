import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';


import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon, IonInput, IonToast } from '@ionic/angular/standalone';


import { AuthService } from '../../services/auth-service/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  standalone: true,
  styleUrls: ['./register-page.component.scss'],
  imports: [
    IonInput, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonToast,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
  ],
})
export class RegisterPageComponent  implements OnInit {

  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);
  passwordControl2 = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private toastController: ToastController) { }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass: 'custom-toast'
    });
    await toast.present();
  }

  ngOnInit() {
    console.log("On Register");
  }

  async onRegister(){
    const email = this.emailControl.value;
    const password = this.passwordControl.value;
    const password2 = this.passwordControl2.value;

    if(email && password && password2) {
      if(password === password2) {
        if (this.emailControl.valid && this.passwordControl.valid) {
          this.authService.onRegister(email ?? "", password ?? "");
        } else {
          await this.showToast('Email or password is invalid.');
        }
      }
      else {
        await this.showToast('Password are not the same');
      }
    }
    else{
      await this.showToast('Fields can not be empty');
    }
    console.log(email, password);
  }

  onGoogleSignUp(){}

}
