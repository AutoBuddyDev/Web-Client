import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  public email: string;
  public password1: string;
  public password2: string;
  public accountType: string;


  ngOnInit() {
  }

  public submitSignup() {
    console.log(this.email);
    console.log(this.password1);
    console.log(this.password2);
    console.log(this.accountType);
  }

}

export class accountType{
  public name:string;
  public id:number;
}
