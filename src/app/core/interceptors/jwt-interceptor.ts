import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth } from '../services/auth';  

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(Auth);
  const token = authService.getToken(); // localStorage se token fetch karega

  // Agar token exist karta hai toh Clone request karke Header attach karein
  if (token) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq); // Modified Request aage bhejein
  }

  // Token nahi hai (e.g. /login request) toh Original request ko bina change kiye jaane dein
  return next(req);
};