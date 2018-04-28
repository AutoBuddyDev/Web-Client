import { Component, OnInit, Input } from '@angular/core';
import { CarCard } from '../../domain/index';
import { DatePipe } from '@angular/common';
import { Part } from '../../domain/models/part'

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  private newCar = new CarCard();
  public carMake: string;
  public carModel: string;
  public carYear: number;
  public carColor: string;
  public carVin: string;
  public carOwner: string;
  public carInitialDiagnosis: string;
  public carManager: string;
  public myForm;
  public showBg: boolean;
  public isLoggedIn: boolean;
  public orders: Part[]=[];
  @Input()
  public cars: CarCard[] = [];

  constructor() { }
  
  private addCar() {
      this.newCar.checkInDate = Date.now();
      this.newCar.id = Math.floor(Math.random() * 25) + 1;
      this.newCar.progress = Math.floor(Math.random() * 99) + 1;
      this.cars.push(this.newCar);
      console.log(this.newCar);
      this.newCar = new CarCard();
  }

  ngOnInit() {
    this.showBg = false;
    this.isLoggedIn = true;
  }

}
