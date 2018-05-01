import { ActivatedRoute } from '@angular/router';
import { Repair } from './../../domain/models/repair';
import { Car } from './../../domain/models/car';
import { Component, OnInit } from '@angular/core';
import { GetProgressService } from '../../services/get-progress.service';
import { HttpModule } from '@angular/http';
import { CarRepository } from '../../domain/car-repository';


@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  public car: Car;
  constructor(
    private activedRoute: ActivatedRoute,
    private carRepository: CarRepository

  ) { }
  public date: Date;
  public progress: number;
  public garageName: string;
  public favorited:boolean;
  ngOnInit() {
    this.date = new Date();
    this.car = new Car();

    this.car.completedRepairs=[];
    this.car.inProgressRepairs=[];

    this.car.repairs = this.car.completedRepairs.length+this.car.inProgressRepairs.length;
    this.progress=(this.car.inProgressRepairs.length/this.car.repairs)*100;
    this.garageName="Bob's Garage";
    this.favorited=false;
    // this.getProgress();

    this.activedRoute.paramMap.subscribe((params: any) => {
      this.carRepository.showOneVehicle(params.get('vehicle_id')).subscribe(data => {
        this.car = data;
      });
    });
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
