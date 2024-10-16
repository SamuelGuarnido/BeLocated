import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';


import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonIcon, IonInput, IonToast } from '@ionic/angular/standalone';


import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { AuthService } from '../../services/auth-service/auth.service';
import { firebaseConfig } from 'src/app/firebase-config';


// Inicializar Firebase
initializeApp(firebaseConfig);

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  standalone: true,
  styleUrls: ['./login-page.component.scss'],
  imports: [
    IonInput, IonIcon, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonFooter, IonToast,
    FormsModule, ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterLink,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService, private router: Router) { }

  onLogin() {
    const email = this.emailControl.value;
    const password = this.passwordControl.value;

    if (this.emailControl.valid && this.passwordControl.valid) {
      this.authService.onLogin(email ?? "", password ?? "");
    } else {
      console.error('Email or password is invalid.');
    }

    console.log(email, password);
  }

  onGoogleSignIn() {
    this.authService.googleSignIn();
  }


}
