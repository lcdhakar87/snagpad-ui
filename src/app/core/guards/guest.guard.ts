import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Auth } from '../services/auth';

export const guestGuard: CanActivateFn = () => {
  const authService = inject(Auth);

  // 1. Check if user already has a token in localStorage
  if (authService.isLoggedIn()) {
    // 2. Redirect authenticated users to their assigned dashboard
    authService.redirectBasedOnRole();
    return false; // Stop navigation to the guest page (/login)
  }

  // 3. User is not logged in -> Allow access to the route
  return true;
};