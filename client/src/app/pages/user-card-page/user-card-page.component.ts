import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ProfileHeaderComponent } from "../../common-ui/profile-header/profile-header.component";
import { ProfileService } from '../../data/services/profile.service';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-card-page',
  standalone: true,
  imports: [RouterOutlet, ProfileHeaderComponent, AsyncPipe],
  templateUrl: './user-card-page.component.html',
  styleUrl: './user-card-page.component.css'
})
export class UserCardPageComponent {
  profileService = inject(ProfileService)
  route = inject(ActivatedRoute)

  me$ = toObservable(this.profileService.me)
  
  
  
  
  profile$ = this.route.params
      .pipe(
        switchMap(({id}) => {
          if (id === 2) {
            // console.log(id);
            // console.log(this.route);
            // console.log(this.profile$);
            this.test()
            return this.me$
          } else {
            return this.profileService.getAccount(id)
          }
          
        })
      )
      test() {
        return console.log(this.profile$);
    
      }
}
