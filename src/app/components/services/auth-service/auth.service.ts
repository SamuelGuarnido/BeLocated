import { Injectable } from '@angular/core';
import { User, getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedAsGuest = false;
  currentUser?: User;

  constructor(private router: Router, private toastController: ToastController) { }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      cssClass: 'custom-toast'
    });
    await toast.present();
  }

  async onLogin(email: string, password: string) {
    const auth = getAuth();

    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Ingreso exitoso
          const user = userCredential.user;
          console.log('Login successful:', user);
        })
        .catch(async (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Login error:', errorCode, errorMessage);

          // Muestra el toast cuando el login falla
          await this.showToast('Login failed');
        });
    } else {
      console.error('Email and password must not be empty.');
    }
  }

  async googleSignIn(): Promise<void> {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    try {
      const result = await signInWithPopup(auth, provider);
      const user: User = result.user;
      console.log('Login successful: ', user);
      // Redirigir a la página principal o a donde prefieras
      this.router.navigate(['inApp']);
    } catch (error) {
      console.error('Google sign-in error: ', error);
      // Manejar error, mostrar toast, etc.
    }
  }

  logAsGuest() {
    this.loggedAsGuest = true;
  }


  async onRegister(email: string, password: string) {
    const auth = getAuth();

    if (email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Registro exitoso
          const user = userCredential.user;
          console.log('Registration successful:', user);
          this.currentUser = user;
          this.router.navigate(["inApp"]); // Redirigir a la página de inicio o donde desees
        })
        .catch(async (error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error('Registration error:', errorCode, errorMessage);

          if(errorCode === "auth/email-already-in-use"){await this.showToast("Email already in use")}
          else{await this.showToast('Register failed');}
          // Manejar errores
        });
    } else {
      console.error('Email and password must not be empty.');
    }
  }
}
