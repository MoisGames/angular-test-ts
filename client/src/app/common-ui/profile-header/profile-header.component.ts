import { Component, Input, } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  @Input() profile!: any
  
}
