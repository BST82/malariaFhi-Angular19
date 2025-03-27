import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isDropdownOpen = signal(false); // State for dropdown toggle
  toggleDropdown() {
    this.isDropdownOpen.set(!this.isDropdownOpen());
  }
}
