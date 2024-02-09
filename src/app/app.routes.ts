import { Routes } from '@angular/router';
import { featureRoute } from './features/features.routes';

export const routes: Routes = [
  {
    path: '',
    children: featureRoute,
  }
];
