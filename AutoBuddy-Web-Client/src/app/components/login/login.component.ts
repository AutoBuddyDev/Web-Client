import { UserRepository } from './../../domain/user-repository';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarRepository } from '../../domain/car-repository';
import { CarRepairsComponent } from '../car-repairs/car-repairs.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public showNav: boolean;

  constructor(
    private userRepository: UserRepository,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.showNav = true;
  }

  public submitLogin() {
    console.log(this.email);
    console.log(this.password);
    const user = {
      email: this.email,
      user_password: this.password
    };

    this.userRepository.login(user).subscribe(res => {
      console.log('res: ', res);
      this.router.navigateByUrl('garage');
    });
  }



}
