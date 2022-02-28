import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.css']
})
export class ChangeUsernameComponent implements OnInit {

  constructor() { }

  usernameForm = new FormGroup({
    changeUsername: new FormControl('', [Validators.required]),
   
  })

  get changeUsername() { return this.usernameForm.get('schoolName') }
 

  usernameFormData() {
    console.log(this.usernameForm.value)
  }


  ngOnInit(): void {
  }

}
