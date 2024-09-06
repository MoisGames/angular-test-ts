import { Component, effect, inject, Input, } from '@angular/core';
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
  currentProfile: Profile[] = []

  constructor() {
    effect(() => {
      this.currentProfile = 
        this.profile.data //Один раз при загрузке страницы присваиваем текущий profile
    })
      
  }

  log() {
    console.log(this.profile.data, 'Это текущий профайл из страницы юзера');
    
  }
  sendCurrentProfile() { // Отправляем данные юзера в profile.service
    this.profileService.getCurrentProfile(this.currentProfile)
  }
  onGoHome() {
    this.router.navigate([""]) // Возврат домой
  }
  onGoSettings() {
    this.router.navigate(["settings"]) // Переход к настройкам
  }
}
