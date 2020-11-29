import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  loginHandler(formValue) {
    console.log(formValue);
  }

}
