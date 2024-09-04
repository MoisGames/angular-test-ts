import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import { ProfileService } from '../../data/services/profile.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [ProfileCardComponent, JsonPipe],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  profileService = inject(ProfileService)
  profiles: any = []

  constructor () {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        return this.profiles = val
      })
  }
}
