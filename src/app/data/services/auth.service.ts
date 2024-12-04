// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl = 'https://reqres.in';
  private loggedIn = false;

  constructor(private router: Router, private http: HttpClient) {
    // Инициализируем loggedIn, проверяя наличие токена в Local Storage
    this.loggedIn = !!localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/login`, { username, password })
      .pipe(
        tap(response => {
          if (response.token) {

            localStorage.setItem('token', response.token); // Сохраняем токен в локальном хранилище
            this.loggedIn = true;
            this.router.navigate(['users']);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('token'); // Удаляем токен
    this.loggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.loggedIn;
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/api/register`, { username, password })
      .pipe(
        tap(response => {
          if (response.token) {

            localStorage.setItem('token', response.token); // Сохраняем токен в локальном хранилище
            this.loggedIn = true;
            this.router.navigate(['users']);
          }
        })
      );
  }
}
