import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  @ViewChild('f') form: NgForm;

  constructor(private userServ: UserService) { }

  ngOnInit(): void {

  }

  loginHandler(formValue) {
    this.userServ.logIn(formValue);
  }

}
