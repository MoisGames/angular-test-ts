import { Component } from '@angular/core';
import { ProfileCardComponent } from "../profile-card/profile-card.component";

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
