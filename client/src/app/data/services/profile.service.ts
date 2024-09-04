import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  baseApiUrl = 'https://reqres.in/api/'
  me!: any
  id!: number
  status!: string


  getMe() {
    return this.http.get(`${this.baseApiUrl}users/me`)
      .pipe(
        tap(res => this.me.set(res))
      )
      
  }
  
  getTestAccounts() {
      return this.http.get(`${this.baseApiUrl}users?page=2`)
  }

  getAccount() {
    return this.http.get(`${this.baseApiUrl}users/2`)
  }

  deleteAccount({id}) {
     this.http.delete(`${this.baseApiUrl}users/${id}`)
        .subscribe(() => this.status = 'Delete successful');
  }
}
