import { Routes } from '@angular/router';

export const AGENCY_ROUTES: Routes = [
  {
    path: '', // Default path for /admin
    loadComponent: () => 
      import('./agency-dashboard/agency-dashboard').then(m => m.AgencyDashboard)
  },
  // Admin ke further child routes
  /*
  {
    path: 'users',
    loadComponent: () => import('./user-management.component').then(m => m.UserManagementComponent)
  }
  */
];