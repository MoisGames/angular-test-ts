import { Component, inject } from '@angular/core';
import { MessagesService } from '../../data/services/messages.service';


@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  constructor (public messageService: MessagesService) { }
  

  ngOnInit() {

  }  
}
