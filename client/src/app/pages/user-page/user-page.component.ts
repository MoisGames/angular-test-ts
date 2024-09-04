import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import { ProfileService } from '../../data/services/profile.service';
import { ListResourcesComponent } from '../../common-ui/list-resources/list-resources/list-resources.component';


@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [ProfileCardComponent, ListResourcesComponent],
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
