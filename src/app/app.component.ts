import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { LoginauthService } from './service/sharedservice/loginauth.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, SidebarComponent,CommonModule,MatIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'malariafhi';
  isLoggedIn$: Observable<boolean>;
  isSidebarVisible: boolean = true; // Sidebar is initially visible

  constructor(private authService: LoginauthService) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
