import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  constructor(public chatService: ChatService,
               private router: Router) { }

  ngOnInit(): void {
  }

  showMessage(index: number) {
    this.chatService.showMessage(index);
  }

  navigateToChatDetail() {
    if (window.innerWidth < 768) {
     this.router.navigate(['user/chat-detail']);
    }
  }



}
