import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-agency-list',
  imports: [CommonModule, ReactiveFormsModule,
    MatTabsModule,    
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './agency-list.html',
  styleUrl: './agency-list.css',
})
export class AgencyList {

  searchQuery = '';
  agencyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.agencyForm = this.fb.group({
      title: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      coachesCount: [0],
      clientsCount: [0]
    });
  }

  onSearch(): void {
    console.log('Searching for:', this.searchQuery);
  }

  onSaveAgency(): void {
    if (this.agencyForm.valid) {
      console.log('Form Data Saved:', this.agencyForm.value);
    }
  }
}
