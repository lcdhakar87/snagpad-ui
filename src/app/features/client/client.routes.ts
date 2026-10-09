import { Routes } from '@angular/router';

export const CLIENT_ROUTES: Routes = [
  {
    path: '', // Default path for /admin
    loadComponent: () => 
      import('./client-dashboard/client-dashboard').then(m => m.ClientDashboard)
  },
  // Admin ke further child routes
  /*
  {
    path: 'users',
    loadComponent: () => import('./user-management.component').then(m => m.UserManagementComponent)
  }
  */
];