import { Routes } from '@angular/router';
import { featureRoute } from './features/features.routes';

export const routes: Routes = [
  {
    path: '',
    children: featureRoute,
  },
  {
    path:'auth/login',
    loadComponent: () => import('./core/pages/login-page/login-page.component').then( (c) => c.LoginPageComponent)
  }
];
