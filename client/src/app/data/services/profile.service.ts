import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  baseApiUrl = 'https://reqres.in/api/'
  me!: any
  getMe() {
    return this.http.get(`${this.baseApiUrl}users/2`)
      .pipe(
        tap(res => this.me.set(res))
      )
      
  }
  getTestAccounts() {
      return this.http.get(`${this.baseApiUrl}users?page=2`)
  }

  getAccount(id: string) {
    return this.http.get(`${this.baseApiUrl}users/{${id}`)
  }
}
