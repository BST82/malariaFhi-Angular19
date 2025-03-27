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

  private isLoggedInSubject = new BehaviorSubject<boolean>(false); // ✅ Initialize with false
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object // ✅ Detect browser vs server
  ) {
    const initialLoginState = this.checkLocalStorage(); // Check if user is logged in
    this.isLoggedInSubject = new BehaviorSubject<boolean>(initialLoginState); // ✅ Properly initialize
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable(); // ✅ Assign observable correctly
  }
  

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
          console.log("Current user saved:", localStorage.getItem('currentUser')); // ✅ Debug log
          this.isLoggedInSubject.next(true);
          console.log("isLoggedInSubject updated: true"); // ✅ Debug log
  
          this.router.navigate(['/home']);
        }
      })
    );
  }
  

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('currentUser');
      this.isLoggedInSubject.next(false);
    }
  }

  isLoggedIn(): boolean {
    const currentUser = localStorage.getItem('currentUser');
    return !!currentUser;
  }
}
