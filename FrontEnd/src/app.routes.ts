import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { AthleteComponent } from './app/pages/athlete/athlete.component';

export const appRoutes: Routes = [
  {
    path: 'admin',
    component: AppLayout,
    children: [
      { path: 'admin', component: Dashboard },
      { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes').then((m) => m.uikitRoutes) },
      { path: 'documentation', component: Documentation },
      { path: 'pages', loadChildren: () => import('./app/pages/pages.routes').then((m) => m.pagesRoutes) }
    ]
  },
  { path: '', component: Landing },
  { path: 'van-dong-vien', component: AthleteComponent },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' }
];
