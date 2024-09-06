import { Component, inject, Input, } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  router = inject(Router)
  profileService = inject(ProfileService)

  @Input() profile!: any // Получили текущий профайл
  // currentProfileHeader = this.profile.data // Объект Json с текущим юзером

  // sendCurrentProfile() { // Отправляем данные юзера в profile.service
  //   this.profileService.getCurrentProfile()
  // }
  onGoHome() {
    this.router.navigate([""]) // Возврат домой
  }
}
