import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  constructor() { }
  
  canLogin(username:string,password:string){
    if(username && password === 'dummy@123'){
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
