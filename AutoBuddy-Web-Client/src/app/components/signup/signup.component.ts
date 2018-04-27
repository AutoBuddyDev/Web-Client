import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../../domain/user-repository';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private userRepository: UserRepository,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }
  public full_name: string;
  public address: string;
  public email: string;
  public password1: string;
  public password2: string;
  public accountType: string;
  public username: string;


  ngOnInit() {
  }

  public submitSignup() {
    console.log(this.email);
    console.log(this.password1);
    console.log(this.password2);
    console.log(this.full_name);
    console.log(this.address);
    console.log(this.accountType);

    const user = {
      user_password: this.password1,
      email:  this.email,
      address: this.address,
      full_name: this.full_name,
      username: this.username,
      favorite_garage: 0
    };

    this.userRepository.signup(user).subscribe(res => {
      console.log('res: ', res);
      this.router.navigateByUrl('login');
    });
  }

}

export class accountType{
  public name:string;
  public id:number;
}
