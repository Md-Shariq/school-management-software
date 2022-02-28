import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  isMessageSelected: boolean = false;
  selectedChatIndex: number;

  constructor() { }

  ngOnInit(): void {
  }

  showMessage(index: number) {
    this.selectedChatIndex = index;
    this.isMessageSelected = true;
  }

}
