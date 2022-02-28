import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetectKeypadService } from 'src/app/services/detect-keypad.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide = true;
  confirmHide = true;

  resetPasswordForm = new FormGroup({
   
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])

  })

  
  get password() { return this.resetPasswordForm.get('password') }
  get confirmPassword() { return this.resetPasswordForm.get('confirmPassword') }

  resetPasswordFormData() {
    console.log(this.resetPasswordForm.value)
  }


  constructor(public keypadService: DetectKeypadService) { }

  ngOnInit(): void {
  }

}
