import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserPageComponent } from "./common-ui/user-page/user-page.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserPageComponent],
  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
