import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  constructor() { }

  canLogin(username:string,password:string){
    if(username && password){
      // can match and see if entering right password. But here just checking if password is entered only then go forward
      this.isAuthenticated = true;
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;
    }
  }

  isLoggedIn(){
    return this.isAuthenticated;
  }
}
