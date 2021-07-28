import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  newEmail: any
  newPassword: any

  constructor() { }

  ngOnInit(): void {
  }

  get email():any {
    return localStorage.getItem('Email')
  }

  get password():any {
    return localStorage.getItem('Password')
  }
}
