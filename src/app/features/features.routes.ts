import { Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { heroRoutes } from './hero/heroe.routes';

export const featureRoute: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: FeaturesComponent,
    children: [
      {
        path:'',
        loadComponent: () => import('./home/pages/home-page/home-page.component').then( (c) => c.HomePageComponent)
      },
      {
        path:'hero',
        children: heroRoutes,
      }
    ]
  }
];
