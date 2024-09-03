import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../profile-card/profile-card.component";
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [ProfileCardComponent,],

  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  profileService = inject(ProfileService)
  profiles: any = []

  constructor () {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        this.profiles = val
      })
  }
}
