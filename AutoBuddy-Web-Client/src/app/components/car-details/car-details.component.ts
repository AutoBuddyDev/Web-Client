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
  public garageName: string;
  public favorited:boolean;
  ngOnInit() {
    this.date = new Date();
    this.car = new Car();
    this.car.vehicle_make="Mercedes";
    this.car.vehicle_model="SLK-250";
    this.car.vehicle_color="White";
    this.car.checkedIn=this.date;
    this.car.completedRepairs=[];
    this.car.inProgressRepairs=[];
    this.car.repairs = this.car.completedRepairs.length+this.car.inProgressRepairs.length;
    this.progress=(this.car.inProgressRepairs.length/this.car.repairs)*100;
    this.garageName="Bob's Garage";
    this.favorited=false;
    // this.getProgress();

  }

  public favorite(name:string){
    if(!this.favorited){
      this.favorited=true;
    }
    else{
      this.favorited=false;
    }
  }

}
