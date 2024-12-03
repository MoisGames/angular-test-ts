import { Component, inject, Input, } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../data/services/profile.service';
import { Profile } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  router = inject(Router)
  profileService = inject(ProfileService)
  @Input() profile!: any // Получили текущий профайл

  currentProfile: Profile[] = []
  onShow: boolean = true;

  constructor() {
    this.currentProfile = this.profile
  }

  sendCurrentProfile() { // Отправляем данные юзера в profile.service
    this.profileService.getCurrentProfile(this.profile)
  }
  onGoHome() {
    this.router.navigate([""]) // Возврат домой
  }
  onGoSettings() {
    this.router.navigate(["settings"]) // Переход к настройкам
  }
}
