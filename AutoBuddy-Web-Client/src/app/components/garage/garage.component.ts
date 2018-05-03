import { PartRepository } from "../../domain/part-repository";
import { GarageRepository } from "./../../domain/garage-repository";
import { UserRepository } from "../../domain/user-repository";
import { CarRepository } from "./../../domain/car-repository";
import { Component, OnInit, Input } from "@angular/core";
import { DatePipe } from "@angular/common";
import { Part } from "../../domain/models/part";
import { ActivatedRoute, Router } from "@angular/router";
import { Car } from "../../domain/models/car";
import { Garage } from '../../domain/models/garage';
// import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: "app-garage",
  templateUrl: "./garage.component.html",
  styleUrls: ["./garage.component.css"]
})
export class GarageComponent implements OnInit {
  public appointment: Date;
  public appointment_time: string;
  public newCar: Car;
  public garages: Garage[];
  public myForm;
  public showBg: boolean;
  public isLoggedIn: boolean;
  public orders: Part[] = [];
  public garage_id = 1;
  public user;
  public type: string;
  public garageName: string;
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
      this.userRepository.getUserInfo().subscribe(user => {
        console.log('user:', user[0]);
        this.user = user[0];
      });

    });
  }

  ngOnInit() {
    this.newCar = new Car();
    this.showBg = false;
    this.isLoggedIn = true;

    this.userRepository.getUserType().subscribe(data => {
      console.log('data:', data);
      this.type = data.type;
      if (data.type === 'garage') {
        this.carRepository.showGarages().subscribe(res => {
          console.log('cars in garage: ', res);
          this.cars = res.vehicles;
        });
      }
      if (data.type === 'customer') {
        this.carRepository.showVehicle().subscribe(res => {
          console.log('cars: ', res);
          this.cars = res;
          // this.cars = res;
        });
        this.partRepository.showPartsForUser().subscribe(data =>{
          this.orders = data;
        })
      }
    });
    this.userRepository.getUserInfo().subscribe(user => {
      console.log('user:', user[0]);
      this.user = user[0];
    });
    this.garageRepository.getGarages().subscribe(garages => {
      console.log('garages: ', garages);
      this.garages = garages.garages;
    });
  }

  public open(e, car) {
    e.stopPropagation();
    this.deleteCar(car);
  }

  scheduleAppointment(garageName) {
    console.log('garageName: ', garageName);
    this.garageName = garageName;
  }

  submitAppointment() {
    console.log('date: ', this.appointment);
    console.log('time: ', this.appointment_time);
    const dateTime = this.appointment + this.appointment_time;
    let hour = parseInt(this.appointment_time[0] + this.appointment_time[1]);
    if (hour > 12) {
      hour -= 12;
    }

    const time = hour + this.appointment_time[2] + this.appointment_time[3] + this.appointment_time[4];
    console.log('time: ', time)
  }

  private deleteCar(car) {
    this.carRepository.deleteCar(car).subscribe(res => {
      this.carRepository.showVehicle().subscribe(vehicles => {
        console.log('carsAfterDelete: ', vehicles);
        this.cars = vehicles;

        console.log(this.cars);
      });
      console.log('res: ', res);
    });
  }
}
