import { Component, effect, inject } from '@angular/core';
import { ProfileHeaderComponent } from '../../common-ui/profile-header/profile-header.component';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProfileService } from '../../data/services/profile.service';
import { OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [ProfileHeaderComponent, ReactiveFormsModule,],
  templateUrl: './settings-page.component.html',
  styleUrl: './settings-page.component.css'
})
export class SettingsPageComponent {
    fb = inject(FormBuilder)
    profileService = inject(ProfileService)

    form: FormGroup = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      // avatar: ['', Validators.required],
    })
    constructor() {
      effect(() => {
        //@ts-ignore
        this.form.patchValue(this.profileService.me())
        
        
      })
    }
    onSave() {
      this.form.markAllAsTouched()
      this.form.updateValueAndValidity()

      if (this.form.invalid) return console.log("Error");
      
      
      //@ts-ignore
      firstValueFrom(this.profileService.updateUser(this.form.value))
    }
}
