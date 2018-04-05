import { Car } from '../../domain/models';
import { trigger, style, animate, transition } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Repair } from '../../domain/models/repair';
@Component({
  selector: 'app-car-repairs',
  templateUrl: './car-repairs.component.html',
  styleUrls: ['./car-repairs.component.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateY(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateY(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateY(100%)', opacity: 0}))
        ])
      ]
    )
  ]
})
export class CarRepairsComponent implements OnInit {
  public newRepair: Repair;
  @Input()
  public completeRepairs: Repair[];
  @Input()
  public inProgressRepairs: Repair[];
  @Input()
  public car: Car;
  public today: Date;
  public noteVisible:boolean[];
  public repaired:boolean;
  public part: string;
  public id:number;

  constructor() { }

  ngOnInit() {
    this.id=0;
    this.part="";
    this.newRepair ={
      parts:[]
    };
    this.repaired=true;
    this.noteVisible=[];

  }
  addPart() {
    this.newRepair.parts.push(this.part);
    this.part = "";
  }
  public addRepair(){
    this.id++;
    this.today = new Date();
    this.newRepair.date=this.today;
    this.newRepair.completed=false;
    this.newRepair.id= this.id;
    if(this.newRepair.completed){
      this.completeRepairs.push(this.newRepair);
    }
    else{
      this.inProgressRepairs.push(this.newRepair);
    }
    this.newRepair={
      parts:[]
    }
  }
  public markComplete(repairID:number){
    this.inProgressRepairs[repairID-1].completed=true;
    this.completeRepairs.push(this.inProgressRepairs[repairID-1])
    this.inProgressRepairs.splice(repairID-1,1);
  }
}
