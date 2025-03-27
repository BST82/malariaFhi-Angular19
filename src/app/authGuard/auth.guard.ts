import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginauthService } from '../service/sharedservice/loginauth.service'; 
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: LoginauthService, private router: Router) {}

  canActivate(route: any, state: any): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

