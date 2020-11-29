import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;

  constructor() { }

  logIn(): void {
    this.isLoggedIn = true;
  }

  logOut():void {
    this.isLoggedIn = false;
  }
}
