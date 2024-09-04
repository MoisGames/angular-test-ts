import { Component, inject } from '@angular/core';
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
  route = inject(ActivatedRoute)

  profiles: any = []
  id: number | undefined;
  subscription: Subscription;
  constructor (activateRoute: ActivatedRoute) {
    this.profileService.getAccount(this.profiles.data.id)
      .subscribe(val => {
        console.log(val);
        return this.profiles = val
      })
      this.subscription = activateRoute.params.subscribe(params=>this.id=params["id"]);
  }
}
