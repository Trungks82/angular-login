import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SignInData } from '../model/signinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockeduser = new SignInData("admin","admin")

  isAuthenticated = false;

  constructor(private router: Router) { }

  authenticate(signinData: SignInData):boolean{
    if(this.checkCredential(signinData)){
      this.isAuthenticated =true;
      this.router.navigate(['home']);
      return true;
    }
    this.isAuthenticated =false;
    return false
  }

  private checkCredential(signinData: SignInData): boolean{
    return this.checkEmail(signinData.getEmail()) && this.checkPassword(signinData.getPassword())
  }

  private checkEmail(email: string): boolean{
    return email === this.mockeduser.getEmail()
  }

  private checkPassword(password: string): boolean{
    return password === this.mockeduser.getPassword()
  }

  logout(){
    this.isAuthenticated = false;
    this.router.navigate(['']);
  }
}
