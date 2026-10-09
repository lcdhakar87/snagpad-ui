import { Component, inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog'; 
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // 👈 Ye dono import karein
import { Login } from '../../../pages/public/login/login';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-public-header',
  standalone: true, 
  imports: [RouterLink, CommonModule, MatDialogModule],
  templateUrl: './public-header.html',
  styleUrl: './public-header.css',
})
export class PublicHeader implements OnInit {
    
    private authService = inject(Auth);
    private dialog = inject(MatDialog); 
    public userLogedIn: boolean = false; 
    
    ngOnInit(): void {
      this.userLogedIn = this.authService.isLoggedIn();
    }

    openLoginModal(): void {
      const dialogRef = this.dialog.open(Login, {
        width: '620px',          // Popup ki width
        disableClose: false,     // Outside click par popup close hone de
        autoFocus: true          // First input field par auto focus kare
      });
  
      // 4. Popup Close hone ke baad ka result handle karein
      // dialogRef.afterClosed().subscribe(result => {
      //   if (result && result.success) {
      //     console.log('Successfully Logged In with:', result.user);
      //     // Yahan user state update karein ya router redirect karein 
      //   } else {
      //     console.log('Login Modal Cancelled');
      //   }
      // });
    }

    openDashboard(){
      this.authService.redirectBasedOnRole();
    }

    logOut(){
      this.userLogedIn = false;
      this.authService.logout();
    }
}
