import { Routes } from '@angular/router';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: '', component: Landing },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notfound', component: Notfound },
  { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
  { path: '**', redirectTo: '/notfound' }
];
