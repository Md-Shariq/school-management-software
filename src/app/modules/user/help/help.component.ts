import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor() { }

  helpForm = new FormGroup({
    schoolName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    textArea: new FormControl('', [Validators.required]),
    aboutYou: new FormControl('', [Validators.required]),
  })

  get schoolName() { return this.helpForm.get('schoolName') }
  get email() { return this.helpForm.get('email') }
  get textArea() { return this.helpForm.get('textArea') }
  get aboutYou() { return this.helpForm.get('aboutYou') }

  helpFormData() {
    console.log(this.helpForm.value)
  }

  ngOnInit(): void {
  }

}
