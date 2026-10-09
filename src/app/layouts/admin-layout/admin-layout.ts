import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicFooter } from '../../shared/components/public-footer/public-footer';
import { AdminHeader } from '../../shared/components/admin-header/admin-header';
@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, AdminHeader, PublicFooter],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css',
})
export class AdminLayout {}
