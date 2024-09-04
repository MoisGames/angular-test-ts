import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-user-card-page',
  standalone: true,
  imports: [RouterOutlet, ProfileHeaderComponent,],
  templateUrl: './user-card-page.component.html',
  styleUrl: './user-card-page.component.css'
})
export class UserCardPageComponent {
  profileService = inject(ProfileService)
  profiles: any = []

  constructor () {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        return this.profiles = val
      })
  }
}
