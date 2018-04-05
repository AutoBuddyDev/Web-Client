import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  showBg: boolean = false;

  constructor() { }

  ngOnInit() {
    // this.AppComponent.showBg = false;
  }

}
