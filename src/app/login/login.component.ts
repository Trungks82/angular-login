import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signinData';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(signInForm: NgForm){
    //console.log(signInForm.value);
    var email = signInForm.value.email;
    localStorage.setItem("Email",JSON.stringify(email));

    var password = signInForm.value.password;
    localStorage.setItem("Password",JSON.stringify(password));
    
    const signinData = new SignInData(signInForm.value.email, signInForm.value.password);
    this.authenticationService.authenticate(signinData)
  }

}
