import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-user-card-page',
  standalone: true,
  imports: [ProfileHeaderComponent],
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
  }
}
