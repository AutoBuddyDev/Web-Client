import { Component, OnInit } from '@angular/core';
import {trigger, style, animate, transition} from '@angular/animations';
@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  public nav:string;
  openNav($event){

    this.nav = $event.type == 'mouseenter' ? 'btn active' : 'btn';
  }
  constructor() { }

  ngOnInit() {
    this.nav="btn";
  }

}
