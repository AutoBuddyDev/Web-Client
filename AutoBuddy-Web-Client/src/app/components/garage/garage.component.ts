import { Garage } from './../../domain/models/garage';
import { CarRepository } from "./../../domain/car-repository";
import { Component, OnInit, Input } from "@angular/core";
import { CarCard } from "../../domain/index";
import { DatePipe } from "@angular/common";
import { Part } from "../../domain/models/part";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from '../../domain/models/car';

@Component({
  selector: "app-garage",
  templateUrl: "./garage.component.html",
  styleUrls: ["./garage.component.css"]
})
export class GarageComponent implements OnInit {
  private newCar = new Car();
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
  public orders: Part[] = [];
  public garage_id = 1;
  @Input() public cars: Car[];

  constructor(
    private carRepository: CarRepository,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {}

  private addCar() {
    // Add car :)
    const car = {
      vehicle_make: this.newCar.vehicle_make,
      vehicle_model: this.newCar.vehicle_model,
      vehicle_year: this.newCar.vehicle_year,
      vehicle_color: this.newCar.vehicle_color,
      vehicle_init_diagnosis: this.newCar.vehicle_init_diagnosis,
      vehicle_vin: this.newCar.vehicle_vin,
      garage_id: 1 // change later when we have garage id.
    };

    this.carRepository.addCar(car).subscribe(res => {
        console.log('res: ', res);
        this.newCar.checkInDate = Date.now();
        this.newCar.id = Math.floor(Math.random() * 25) + 1;
        this.newCar.progress = Math.floor(Math.random() * 99) + 1;
        this.cars.push(this.newCar);
        console.log(this.newCar);
        this.newCar = new Car();
      });
  }

  ngOnInit() {
    this.showBg = false;
    this.isLoggedIn = true;
    this.carRepository.showVehicle().subscribe(res => {
      console.log('res: ', res[0]);
      this.cars = res;
      // this.cars = res;
    });
  }
}
