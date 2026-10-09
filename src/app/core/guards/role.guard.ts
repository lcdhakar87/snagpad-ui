import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const roleGuard = (expectedRole: string): CanActivateFn => {
  return () => {
    const authService = inject(Auth);
    const router = inject(Router);

    const userRole = authService.getUserRole(); // e.g., 'ADMIN', 'COACH', 'AGENCY', 'CLIENT'
    
    if (authService.isLoggedIn() && userRole === expectedRole) {
      return true;
    }

    // Access Denied: Login par redirect karein
    router.navigate(['/home']);
    return false;
  };
};