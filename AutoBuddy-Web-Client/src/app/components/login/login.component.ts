import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public showNav: boolean;

  constructor() { }

  ngOnInit() {
    this.showNav = true;
  }

  public submitLogin() {
    console.log(this.email);
    console.log(this.password);
  }



}
