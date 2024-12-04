import { HttpClient } from '@angular/common/http';
import {inject, Injectable } from '@angular/core';
import {tap } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient)
  baseApiUrl = 'https://reqres.in/api/'
  me!: any
  id: number = 0
  currentProfile: Profile[] = [] // В сервисе хранится текущий юзер Json


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
     return this.http.delete(`${this.baseApiUrl}users/${id}`)
  }
  updateUser(profile:Profile) {
    return this.http.put(
      `${this.baseApiUrl}users/${this.id}`, profile)
  }

  getCurrentProfile(val: Profile[]) { // Получаем текущего юзера
      this.currentProfile = val
  }
}
