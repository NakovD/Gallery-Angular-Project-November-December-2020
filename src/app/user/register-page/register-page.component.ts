import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  passNotMatch = false;

  @ViewChild('f') form: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  registerHandler(formValue) {
    console.log(formValue);
  }

}
