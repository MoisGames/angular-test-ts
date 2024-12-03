import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
    http = inject(HttpClient)
    baseApiUrl = 'https://reqres.in/api/'

    getResources() {
      return this.http.get(`${this.baseApiUrl}unknown`)
    }
}
