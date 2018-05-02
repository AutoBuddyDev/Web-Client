import { GarageRepository } from './../../domain/garage-repository';
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
    private carRepository: CarRepository,
    private garageRepository: GarageRepository

  ) { }
  public date: Date;
  public progress: number;
  public garageName: String;
  public favorited:boolean;
  public repairs: any;
  public inProgressRepairs =[];
  public completedRepairs = [];
  ngOnInit() {
    this.date = new Date();
    this.car = new Car();
    this.activedRoute.paramMap.subscribe((params: any) => {
      this.carRepository.showOneVehicle(params.get('vehicle_id')).subscribe(data => {
        this.car = data[0];
        this.garageRepository.getGarageByUser(this.car.garage_id).subscribe(dataTwo=> {
          console.log(dataTwo);
          this.garageName=dataTwo[0].garage_name;
        })
      });
    });
    this.activedRoute.paramMap.subscribe((params: any) => {
      this.carRepository.showRepairsForUser(params.get('vehicle_id')).subscribe(data => {
        this.repairs = data;
        this._sortRepairs(this.repairs);

      });
    });


    this.repairs = this.completedRepairs.length+this.inProgressRepairs.length;
    this.progress=(this.inProgressRepairs.length/this.repairs)*100;
    this.favorited=false;

  }
  private _sortRepairs(repairs: Repair[]){
    for(var x = 0; x< repairs.length;x++){
      if(repairs[x].repair_status=="not repaired"){
        this.inProgressRepairs.push(repairs[x])
      }
      else{
        this.completedRepairs.push(repairs[x])
      }
    }
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
