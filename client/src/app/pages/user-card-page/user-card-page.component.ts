import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { Subscription, switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';
import { JsonPipe } from '@angular/common';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-user-card-page',
  standalone: true,
  imports: [RouterOutlet, ProfileHeaderComponent, AsyncPipe,JsonPipe],
  templateUrl: './user-card-page.component.html',
  styleUrl: './user-card-page.component.css'
})
export class UserCardPageComponent {
  profileService = inject(ProfileService)
  profiles: any = [] // Мы получаем объект с полем data
  route: ActivatedRoute = inject(ActivatedRoute)
  id: number = 0

  constructor () {
    this.id = Number(this.route.snapshot.params["id"])
    this.profileService.getAccount(this.id)
      .subscribe(val => {
        return this.profiles = val // получили ответ от сервера и записали в profiles
      })
      
      console.log(this.profiles);
  }
  

  // route = inject(ActivatedRoute)

  // me$ = toObservable(this.profileService.me)

  // profile$ = this.route.params
  //     .pipe(
  //       switchMap(({id}) => {
  //         if (id === 'me') {
  //           return this.me$
  //         } else {
  //           return this.profileService.getAccount(id)
  //         }
  //       })
  //     )
}
