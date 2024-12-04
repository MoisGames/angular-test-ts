import { Component, inject, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-resources',
  standalone: true,
  imports: [],
  templateUrl: './list-resources.component.html',
  styleUrl: './list-resources.component.css'
})
export class ListResourcesComponent {
  profilesService = inject(HttpClient)
  @Input() resource!: any

}
