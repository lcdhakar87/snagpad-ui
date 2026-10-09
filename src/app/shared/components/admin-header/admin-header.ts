import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-header',
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './admin-header.html',
  styleUrl: './admin-header.css',
})
export class AdminHeader implements OnInit {

    private authService = inject(Auth); 
    private router = inject(Router);
    public userLogedIn: boolean = false; 

    ngOnInit(): void {
      this.userLogedIn = this.authService.isLoggedIn();
    }


    openDashboard(){
      this.authService.redirectBasedOnRole();
    }

    logOut(){
      this.userLogedIn = false;
      this.authService.logout();
    }

    // 🚀 Single Menu Trigger Reference
  @ViewChild(MatMenuTrigger) accountsMenuTrigger!: MatMenuTrigger;

  // Hover enter hone par menu open karein
  openMenu() {
    this.accountsMenuTrigger.openMenu();
  }

  // Hover leave hone par menu close karein
  closeMenu() {
    this.accountsMenuTrigger.closeMenu();
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}
