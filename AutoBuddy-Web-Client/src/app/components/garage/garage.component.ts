import { PartRepository } from '../../domain/part-repository';
import { GarageRepository } from './../../domain/garage-repository';
import { UserRepository } from '../../domain/user-repository';
import { Garage } from './../../domain/models/garage';
import { CarRepository } from "./../../domain/car-repository";
import { Component, OnInit, Input } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Part } from "../../domain/models/part";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from '../../domain/models/car'
@Component({
  selector: "app-garage",
  templateUrl: "./garage.component.html",
  styleUrls: ["./garage.component.css"]
})
export class GarageComponent implements OnInit {
  public newCar: Car;

  public myForm;
  public showBg: boolean;
  public isLoggedIn: boolean;
  public orders: Part[] = [];
  public garage_id = 1;
  public user;
  @Input() public cars: Car[];

  constructor(
    private carRepository: CarRepository,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private userRepository: UserRepository,
    private garageRepository: GarageRepository,
    private partRepository: PartRepository
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
      vehicle_manager: this.newCar.vehicle_manager,
      garage_id: 1 // change later when we have garage id.
    };

    this.carRepository.addCar(car).subscribe(res => {
        console.log('res: ', res);
        this.newCar.checkInDate = Date.now();
        this.newCar.progress = Math.floor(Math.random() * 99) + 1;
        this.cars.push(this.newCar);
        console.log(this.newCar);
        this.newCar = new Car();

        this.carRepository.showVehicle().subscribe(res => {
          console.log('res: ', res);
          this.cars = res;
          // this.cars = res;
        });
        this.userRepository.getUserInfo().subscribe(user=>{
          console.log('user:', user[0]);
          this.user = user[0];

        })
      });
  }

  ngOnInit() {
    this.newCar= new Car();
    this.showBg = false;
    this.isLoggedIn = true;
<<<<<<< HEAD
    this.carRepository.showVehicle().subscribe(res => {
      console.log('res: ', res[0]);
      // this.cars = res;
=======

    this.userRepository.getUserType().subscribe(data =>{
      console.log('data:', data);
      if(data.type=="garage"){
        this.carRepository.showGarages().subscribe(data => {
          console.log("cars in garage: ", data);
          this.cars = data.vehicles;

        })
      }
      if(data.type=="customer"){
        this.carRepository.showVehicle().subscribe(res => {
          console.log('cars: ', res);
          this.cars = res;
          // this.cars = res;
        });
      }
    })
    this.userRepository.getUserInfo().subscribe(user=>{
      console.log('user:', user[0]);
      this.user = user[0];
    })
    this.partRepository.showParts().subscribe(data =>{
      this.orders = data;
    })
  }

  public open(e, car){
    e.stopPropagation();
    this.deleteCar(car);
  }

  private deleteCar(car) {
    this.carRepository.deleteCar(car).subscribe(res => {
      this.carRepository.showVehicle().subscribe(res => {
        console.log('carsAfterDelete: ', res);
        this.cars = res;

        console.log(this.cars)
        // this.cars = res;
      });
      console.log('res: ', res);
>>>>>>> 2223807e25871bab92c380b6d08fa7da4ec4ad72
    });

  }
}
