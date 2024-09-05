import { Component, inject, Input, } from '@angular/core';
import { ProfileService } from '../../data/services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessagesComponent } from "../messages/messages.component";


@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [MessagesComponent],
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
      // status => {
      //   this.status = status
      //   console.log(status);
        
      // }
      
    }
}
