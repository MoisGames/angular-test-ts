import { Component, inject, Input, } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
    @Input() profile!: any
    profileServices = inject(ProfileService)

    status!: any
    deleteClick(id: number) {
      this.profileServices.deleteAccount(id).subscribe(),
      this.profile = false
    }
}
