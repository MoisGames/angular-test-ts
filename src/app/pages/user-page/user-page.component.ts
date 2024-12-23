import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common-ui/profile-card/profile-card.component";
import { ProfileService } from '../../data/services/profile.service';
import { ListResourcesComponent } from '../../common-ui/list-resources/list-resources/list-resources.component';
import { ResourcesService } from '../../data/services/resources.service';
import { AuthService } from '../../data/services/auth.service';


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

  resourceService = inject(ResourcesService)
  resources: any = []

  authService = inject(AuthService)

  constructor () {
    this.profileService.getTestAccounts()
      .subscribe(val => {
        return this.profiles = val
      })
    this.resourceService.getResources()
      .subscribe(val => {
        return this.resources = val
      })
  }
}
