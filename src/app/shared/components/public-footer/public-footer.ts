import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // 👈 Ye dono import karein
@Component({
  selector: 'app-public-footer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './public-footer.html',
  styleUrl: './public-footer.css',
})
export class PublicFooter {}
