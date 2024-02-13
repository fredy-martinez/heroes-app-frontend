import { Routes } from '@angular/router';

export const heroRoutes: Routes = [
  {
    path:'hero-shortcut',
    loadComponent: () => import('./pages/hero-shortcut/hero-shortcut.component').then( (c) => c.HeroShortcutComponent)
  },
  {
    path: 'create-hero',
    loadComponent: () => import('../hero/pages/create-hero-page/create-hero-page.component').then( (c) => c.CreateHeroPageComponent)
  }
]
