import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home.page').then((m) => m.HomePage),
  },
  {
    path: 'forms',
    children: [
      {
        path: '',
        redirectTo: 'signal-forms',
        pathMatch: 'full',
      },
      {
        path: 'signal-forms',
        loadComponent: () =>
          import('./pages/forms/signal-forms.page').then((m) => m.SignalFormsPage),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/404.page').then((m) => m.NotFoundPage),
  },
];
