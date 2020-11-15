import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get isLogged(): boolean {
    return this.userService.isLoggedIn;
  }

  constructor(public userService: UserService) { }

  loginHandler(): void {
    this.userService.logIn();
  }

  logoutHandler(): void {
    this.userService.logOut();
  }

}