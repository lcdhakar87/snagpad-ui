import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError, tap  } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  
})

export class Auth {
     
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router){}
  

  private tokenKey = "user_token";
  private userRole = "user_role";

  // 1. Login Function (Token Save Karega)
  login(credentials: any): Observable<any> { 
    return this.http.post<any>(`${this.apiUrl}/api/auth/login`, credentials).pipe(
      // Token save karne ke liye 'tap' operator use karein (side-effect handling)
      tap((response) => {
        console.log(response);
        if (response && response.token) {
          localStorage.setItem(this.tokenKey, response.token);
          localStorage.setItem(this.userRole, response.role);
          console.log("check storage : ",localStorage.getItem(this.tokenKey));
        }
      }),
      
      catchError((error) => {
        console.error('Login error:', error);
        return throwError(() => error);  
      })
    );
  }

 
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUserRole():string | null {
    return localStorage.getItem(this.userRole);
  } 

  isLoggedIn(): boolean {
    const token = this.getToken(); 
    return !!token; 
  }

   
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userRole);
     this.router.navigate(['/home']);
  }

  redirectBasedOnRole(): void {
    const role = this.getUserRole()?.toUpperCase();

    switch (role) {
      case 'ADMIN':
        this.router.navigate(['/admin']);
        break;
      case 'SUPERUSER':
        this.router.navigate(['/superuser']);
        break;
      case 'AGENCY':
        this.router.navigate(['/agency']);
        break;
      case 'COACH':
        this.router.navigate(['/coach']);
        break;
      case 'CLIENT':
        this.router.navigate(['/client']);
        break;
      default:
        this.router.navigate(['/home']);
        break;
    }
  }
}
