import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetectKeypadService } from 'src/app/services/detect-keypad.service';
import { ApiservicesService } from 'src/app/services/apiservices.service';


@Component({
  selector: 'app-school-name',
  templateUrl: './school-name.component.html',
  styleUrls: ['./school-name.component.css']
})
export class SchoolNameComponent implements OnInit {
  schoollist: any = [];
  searchName: string = "";
  

  constructor(private _apiservice: ApiservicesService, public keypadService: DetectKeypadService) { }


  schoolForm = new FormGroup({
    schoolName: new FormControl('', [Validators.required]),
  })

  get schoolName() { return this.schoolForm.get('schoolName') }

  schoolFormData() {
    console.log(this.schoolForm.value)
  }

  ngOnInit(): void {

    console.log(this.schoollist);
  }


  searchschool(event: any) {
    this.searchName = event.target.value;
    this._apiservice
      .schoollist(this.searchName).subscribe((data: any) => {
        this.schoollist = data.data;
        
      })
  }
 
}
