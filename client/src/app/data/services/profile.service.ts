import { HttpClient } from '@angular/common/http';
import { Inject, inject, Injectable, signal } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { MessagesComponent } from '../../common-ui/messages/messages.component';
import { MessagesService } from './messages.service';
import { ActivatedRoute } from '@angular/router';
import { Profile } from '../interfaces/profile.interface';

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
    return this.http.get(`${this.baseApiUrl}users/1`)
      .pipe(
        tap(res => this.me.set(res))
      )
  }
  
  getTestAccounts() { // Функция получения списка юзеров
      return this.http.get(`${this.baseApiUrl}users?page=2`)
  }

  getAccount(id:number) { // Получаем 1 юзера
    return this.http.get(`${this.baseApiUrl}users/${id}`)
  }
  
  deleteAccount(id: number){ // Удаляем юзера
     return this.http.delete(`${this.baseApiUrl}users/${id}`).pipe(
        tap((status: any) => this.messageService.add(`Удален пользователь: id=${id} Статус: ${status}`)),
     )
  }
  updateUser(profile:Profile) {
    return this.http.put(
      `${this.baseApiUrl}users/${this.id}`,
      profile
    )
  }
}
