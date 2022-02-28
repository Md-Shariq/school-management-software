import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  cardselect: string;

  constructor(public router: Router,) {
    this.cardselect=this.router.url
   }

  ngOnInit(): void {
  }

  select() {
    this.router.events.subscribe(
      (event: any) => {
       if (event instanceof NavigationEnd) {
        this.cardselect= this.router.url;

    }
   }
  );
   
 }

}
