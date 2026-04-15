import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((m) => m.HomePage),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/404.page').then((m) => m.NotFoundPage),
  },
];
