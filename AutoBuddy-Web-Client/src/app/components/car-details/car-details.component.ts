import { Repair } from './../../domain/models/repair';
import { Car } from './../../domain/models/car';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  public car: Car;
  constructor() { }
  public date: Date;
  public progress: number;
  ngOnInit() {
    this.date = new Date();
    this.car = new Car();
    this.car.make="Mercedes";
    this.car.model="SLK-250";
    this.car.color="White";
    this.car.checkedIn=this.date;
    this.car.completedRepairs=[
    ];
    this.car.inProgressRepairs=[];
    this.progress = 0;

  }

}
