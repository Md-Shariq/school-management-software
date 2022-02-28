import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiservicesService } from 'src/app/services/apiservices.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';





@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {


  myControl = new FormControl();
  searchName: any;
  schoollist: any;
  selectable = false;
  removable = true;
  addOnBlur = true;
  tagslist: any = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(private _apiservice: ApiservicesService) { }

  ngOnInit(): void {

  }



  searchinterest(event: any) {
    this.searchName = event.target.value;
    this._apiservice
      .schoollist(this.searchName).subscribe((data: any) => {
        this.schoollist = data.data;
        console.log(this.schoollist);


      })
  }
  add(event: string): void {
    const value = (event || '').trim();

    // Add our fruit
    if (value) {
      this.tagslist.push({ name: value });


    }

    // Clear the input value
    // event.chipInput!.clear();
  }

  remove(index: number): void {


    // const index = this.tagslist.indexOf(val);

    if (index >= 0) {
      this.tagslist.splice(index, 1);
    }
  }

}
