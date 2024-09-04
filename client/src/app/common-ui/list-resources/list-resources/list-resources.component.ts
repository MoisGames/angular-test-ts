import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-resources',
  standalone: true,
  imports: [],
  templateUrl: './list-resources.component.html',
  styleUrl: './list-resources.component.css'
})
export class ListResourcesComponent {
  @Input() resource!: any
}
