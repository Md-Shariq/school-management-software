import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetectKeypadService } from 'src/app/services/detect-keypad.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  signUpForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    lastname: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
   
    dateofbirth: new FormControl('',),
    graduation: new FormControl('',),
    accountType: new FormControl('parent')
  })

  get firstname() { return this.signUpForm.get('firstname') }
  get lastname() { return this.signUpForm.get('lastname') }
  get username() { return this.signUpForm.get('username') }
  get email() { return this.signUpForm.get('email') }
  get password() { return this.signUpForm.get('password') }
  get dateofbirth() { return this.signUpForm.get('dateofbirth') }
  get graduation() { return this.signUpForm.get('graduation') }
  get accountType() { return this.signUpForm.get('accountType') }

  signUpFormData() {
    console.log(this.signUpForm.value)
  }


  constructor(public keypadService: DetectKeypadService) { }

  ngOnInit(): void {
  }

}
