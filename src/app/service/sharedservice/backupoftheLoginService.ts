import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_USERS_URL = `${environment.apiUrl}/UserLogins`;

@Injectable({
  providedIn: 'root'
})
export class LoginauthService {

  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkLocalStorage()); // ✅ Initialize with localStorage check
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object 
  ) {}

  private checkLocalStorage(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const currentUser = localStorage.getItem('currentUser');
      return !!currentUser;
    }
    return false;
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<any>(`${API_USERS_URL}/login`, credentials).pipe(
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          const currentUser = {
            id: response.id,
            ...response.user,
            token: response.id,
          };
          localStorage.setItem('currentUser', JSON.stringify(currentUser));

          this.isLoggedInSubject.next(true); // ✅ Update login state
          this.router.navigate(['/home']);
        }
      })
    );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
      this.isLoggedInSubject.next(false); // ✅ Update logout state
      this.router.navigate(['/login']);
    }
  }

  isLoggedIn(): boolean {
    return this.isLoggedInSubject.value; // ✅ Correctly check login status
  }
}
