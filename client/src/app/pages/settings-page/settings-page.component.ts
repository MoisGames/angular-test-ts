import { Component, effect, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
import { Profile } from '../../data/interfaces/profile.interface';


@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule,],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {
  constructor() {
    effect(() => {
      //@ts-ignore
      this.form.patchValue(
        this.profileService.currentProfile); // Заполняем форму текущим юзером
      this.profile = this.profileService.currentProfile
    })
  }
    fb = inject(FormBuilder)
    profileService = inject(ProfileService)
    router = inject(Router)
    profile: Profile[] = []


    form: FormGroup = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      // avatar: ['', Validators.required],
    })
   
    onSave() {
      this.form.markAllAsTouched()
      this.form.updateValueAndValidity()

      if (this.form.invalid) return console.log("Error");

      //@ts-ignore
      firstValueFrom(this.profileService.updateUser(this.form.value))
    }
    onRedirectHome() {
      this.router.navigate([""])
    }
    log() {
      console.log(this.profile, 'Это профайл который мы получаем в компонент карты');
      console.log(this.profile = this.profileService.currentProfile, "Это то что мы присваиваем");
      
    }
}
