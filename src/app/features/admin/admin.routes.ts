import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',  
    loadComponent: () => import('./admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
  },
  {
    path: 'dashboard',  
    loadComponent: () => import('./admin-dashboard/admin-dashboard').then(m => m.AdminDashboard)
  },
  {
    path:'agency',
    loadComponent: ()=> import('./agency-list/agency-list').then(m => m.AgencyList)
  }
  
  // Admin ke further child routes
  /*
  {
    path: 'users',
    loadComponent: () => import('./user-management.component').then(m => m.UserManagementComponent)
  }
  */
];