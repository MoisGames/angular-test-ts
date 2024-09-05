import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { MessagesComponent } from '../../common-ui/messages/messages.component';
import { MessagesService } from './messages.service';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  baseApiUrl = 'https://reqres.in/api/'
  me!: any
  id: number = 0

  constructor(private messageService: MessagesService) { }

  getMe() {
    return this.http.get(`${this.baseApiUrl}users/me`)
      .pipe(
        tap(res => this.me.set(res))
      )
      
  }
  
  getTestAccounts() {
      return this.http.get(`${this.baseApiUrl}users?page=2`)
  }

  getAccount(id:number) {
    return this.http.get(`${this.baseApiUrl}users/${id}`)
  }
  
  deleteAccount(id: number){
     return this.http.delete(`${this.baseApiUrl}users/${id}`).pipe(
        tap((status: any) => this.messageService.add(`Удален пользователь: id=${id} Статус: ${status}`)),
     )
  }
  
}
