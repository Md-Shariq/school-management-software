import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  experienceForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    employment: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    month: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  })

  get title() { return this.experienceForm.get('title') }
  get employment() { return this.experienceForm.get('employment') }
  get company() { return this.experienceForm.get('company') }
  get location() { return this.experienceForm.get('location') }
  get month() { return this.experienceForm.get('month') }
  get year() { return this.experienceForm.get('year') }

  experienceFormData() {
    console.log(this.experienceForm.value)
  }

  ngOnInit(): void {
  }

}
