import { Routes } from '@angular/router';

export const COACH_ROUTES: Routes = [
  {
    path: '', // Default path for /admin
    loadComponent: () => 
      import('./coach-dashboard/coach-dashboard').then(m => m.CoachDashboard)
  },
  // Admin ke further child routes
  /*
  {
    path: 'users',
    loadComponent: () => import('./user-management.component').then(m => m.UserManagementComponent)
  }
  */
];