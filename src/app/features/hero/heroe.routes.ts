import { Routes } from '@angular/router';

export const heroRoutes: Routes = [
  {
    path: 'create-hero',
    loadComponent: () => import('../hero/pages/create-hero-page/create-hero-page.component').then( (c) => c.CreateHeroPageComponent)
  }
]
