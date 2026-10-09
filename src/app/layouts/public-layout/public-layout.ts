import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicFooter } from '../../shared/components/public-footer/public-footer';
import { PublicHeader } from '../../shared/components/public-header/public-header';
@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, PublicFooter, PublicHeader],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css',
})
export class PublicLayout {}
