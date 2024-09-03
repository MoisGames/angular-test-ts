import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPageComponent } from "./common-ui/user-page/user-page.component";
import { ProfileCardComponent } from "./common-ui/profile-card/profile-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserPageComponent, ProfileCardComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test-ts';
}
