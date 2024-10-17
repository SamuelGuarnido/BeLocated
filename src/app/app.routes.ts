import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'login',
    loadComponent: () => import('./components/view/login-page/login-page.component').then((m) => m.LoginPageComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./components/view/register-page/register-page.component').then((m) => m.RegisterPageComponent),
  },
  {
    path: 'inApp',
    loadComponent: () => import('./components/view/in-app/in-app.component').then((m) => m.InAppComponent),
  },
  {
    path: 'userSettings',
    loadComponent: () => import('./components/view/user-settings/user-settings.component').then((m) => m.UserSettingsComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
