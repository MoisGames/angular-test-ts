import { Component, inject, NgZone } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder,FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
  constructor(private ngZone: NgZone) {
      this.form.patchValue(
        this.profileService.currentProfile); // Заполняем форму текущим юзером
      this.ngZone.run(() => {
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
    })

    onSave() {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();

      if (this.form.invalid) {
          console.log("Error");
          return;
      }

      firstValueFrom(this.profileService.updateUser(this.form.value))
          .then(response => {
              console.log('Profile updated:', response);
          })
          .catch(err => {
              console.error('Error updating profile:', err);
          });
  }

    onRedirectHome() {
      this.router.navigate([""])
    }
}
