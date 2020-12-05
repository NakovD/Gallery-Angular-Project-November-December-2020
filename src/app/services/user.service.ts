import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;

  constructor(public auth: AngularFireAuth) { }

  async logIn(userData): Promise<void> {
    console.log(userData);
    var logUser = this.auth.signInWithEmailAndPassword(userData.email, userData.password);
    this.addUserDataToSessionStorage();
    this.isLoggedIn = true;
  }

  async register(userData): Promise<void> {
    var registerUser = await this.auth.createUserWithEmailAndPassword(userData.email, userData.password);
    this.addUserDataToSessionStorage();
    this.isLoggedIn = true;
  }

  logOut(): void {
    this.auth.signOut();
    sessionStorage.clear();
    this.isLoggedIn = false;
  }

  async addUserDataToSessionStorage(): Promise<void> {
    this.auth.user.subscribe(async data => {
      if (data) {
        sessionStorage.setItem('email', data.email);
        sessionStorage.setItem('userId', data.uid);
        var token = await data.getIdToken();
        sessionStorage.setItem('token', token);
      }
    });
  }
}
