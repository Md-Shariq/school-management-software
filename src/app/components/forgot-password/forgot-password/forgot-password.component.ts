import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetectKeypadService } from 'src/app/services/detect-keypad.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(public keypadService: DetectKeypadService) { }

  forgotForm = new FormGroup({
    forgotPassword: new FormControl('', [Validators.required,Validators.email]),
  })

  get forgotPassword() { return this.forgotForm.get('forgotPassword') }

  forgotFormData() {
    console.log(this.forgotForm.value)
  }

  ngOnInit(): void {
  }

}
