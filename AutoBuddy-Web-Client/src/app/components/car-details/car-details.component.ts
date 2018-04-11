import { Repair } from './../../domain/models/repair';
import { Car } from './../../domain/models/car';
import { Component, OnInit } from '@angular/core';
import { GetProgressService } from '../../services/get-progress.service';
import { HttpModule } from '@angular/http';


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
    this.car.completedRepairs=[];
    this.car.inProgressRepairs=[];
    this.car.repairs = this.car.completedRepairs.length+this.car.inProgressRepairs.length;
    this.progress=(this.car.inProgressRepairs.length/this.car.repairs)*100;
    // this.getProgress();

  }

  // getProgress(): void{
  //   this.progress = this.progressService.getProgress();
  // }

}
