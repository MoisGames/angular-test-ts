import { Injectable } from '@angular/core';
    import { Router } from '@angular/router';

    @Injectable({
      providedIn: 'root'
    })
    export class AuthService {
      private loggedIn = false;

      constructor(private router: Router) {}

      login() {
        this.loggedIn = true;
        this.router.navigate(['/users']);
      }

      logout() {
        this.loggedIn = false;
        this.router.navigate(['/login']);
      }

      isAuthenticated(): boolean {
        return this.loggedIn;
      }
    }
