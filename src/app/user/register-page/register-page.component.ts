import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  passNotMatch = false;

  @ViewChild('f') form: NgForm;

  constructor(public userServ: UserService) { }

  ngOnInit(): void {
  }

  registerHandler(formValue) {
    var checkThePasswords = this.comparePasswords(formValue);
    if (!checkThePasswords) {
      this.passNotMatch = true;
      return;
    }
    this.userServ.register(formValue);
  }

  comparePasswords(formValue): boolean {
    if (formValue.password !== formValue.repeatPass) {
      return false;
    }
    return true;
  }

}
