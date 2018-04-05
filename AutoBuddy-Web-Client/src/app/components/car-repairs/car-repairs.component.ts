import { trigger, style, animate, transition } from '@angular/animations';
import { Repair } from './../../domain/models/repair';
import { Component, OnInit, Input } from '@angular/core';
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
  public today: Date;
  public noteVisible:boolean[];
  public repaired:boolean;
  constructor() { }

  ngOnInit() {
    this.newRepair ={
    };
    this.repaired=true;

    this.noteVisible=[];

  }
  public addRepair(){
    this.today = new Date();
    this.newRepair.date=this.today;
    this.newRepair.completed=false;
    this.newRepair.notes="something went wrong";
    this.newRepair.title="Fix Window";
    this.newRepair.x=30;
    this.newRepair.y=80
    if(this.newRepair.completed){
      this.completeRepairs.push(this.newRepair);
    }
    else{
      this.inProgressRepairs.push(this.newRepair);
    }
  }
}
