import { Repair } from './../../domain/models/repair';
import { Car } from './../../domain/models/car';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-repair',
  templateUrl: './repair.component.html',
  styleUrls: ['./repair.component.css']
})
export class RepairComponent implements OnInit {
  @Input() car: Car;

  public repair = new Repair;
  public part: String;

  constructor() { }

  ngOnInit() {
    this.part = '';
    this.repair = {
      title: '',
      parts: [],
      notes: '',
      x: 0 ,
      y: 0 ,
      id: this.car.repairs,
      completed: false,
      date: new Date(),
    };
  }

  addPart() {
    this.repair.parts.push(this.part);
    this.part = '';
  }

  addRepair() {
    this.car.inProgressRepairs.push(this.repair);
    this.repair = {
      title: '',
      parts: [],
      notes: '',
      x: 0 ,
      y: 0 ,
      id: this.car.repairs,
      completed: false,
      date: new Date(),
    };
    console.log('car: ', this.car);
  }

}
