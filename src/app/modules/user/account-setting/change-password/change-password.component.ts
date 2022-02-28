import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  passwordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
   
  })

  get oldPassword() { return this.passwordForm.get('oldPassword') }
  get newPassword() { return this.passwordForm.get('newPassword') }
  get confirmPassword() { return this.passwordForm.get('confirmPassword') }
 

  passwordFormData() {
    console.log(this.passwordForm.value)
  }

  ngOnInit(): void {
  }

}
