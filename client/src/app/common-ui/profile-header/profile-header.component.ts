import { Component, inject, Input, } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './profile-header.component.html',
  styleUrl: './profile-header.component.css'
})
export class ProfileHeaderComponent {
  router = inject(Router)
  @Input() profile!: any

  onGoHome() {
    this.router.navigate([""])
  }
}
