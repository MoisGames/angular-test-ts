import { Component, inject, Input, } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
    @Input() profile!: any
    profileServices = inject(HttpClient)

    deleteAccount(profile:any) {
      this.profileServices.deleteAccount(profile).subscribe();
    }
}
