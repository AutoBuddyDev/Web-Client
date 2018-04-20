import { Car } from '../../domain/models';
import { trigger, style, animate, transition } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { Repair } from '../../domain/models/repair';
import { RepairRepository } from '../../domain/repair-repository';
import { ActivatedRoute, Router } from '@angular/router';
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
  public progress:number;

  constructor(
    private repairRepository: RepairRepository,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id=0;
    this.part="";
    this.newRepair ={
      parts:[]
    };
    this.repaired=true;
    this.noteVisible=[];
    this.progress=0;
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

    // we dont actually need these, but for the purpose
    // of the request, we need them.

    this.newRepair.vehicle_id = undefined; // no car id so undef.
    this.newRepair.repairStatus = 'ok';
    // need to add cost, carId, repairStatus (string)

    // API call
    this.repairRepository.addRepair(this.newRepair).subscribe(res => {
      console.log('res: ', res);
    });
    // End of api call


    if(this.newRepair.completed){
      this.completeRepairs.push(this.newRepair);
    }
    else{
      this.inProgressRepairs.push(this.newRepair);
    }
    this.progress=100*this.completeRepairs.length/(this.completeRepairs.length+this.inProgressRepairs.length)
    this.newRepair={
      parts:[]
    }
    this.part="";
  }
  public markComplete(repairID:number){
    let currentId;
    for(let x = 0;x<this.inProgressRepairs.length;x++){
      if(this.inProgressRepairs[x].id==repairID){
        currentId = x;
      }
    }
    this.inProgressRepairs[currentId].completed=true;
    this.completeRepairs.push(this.inProgressRepairs[currentId])
    this.inProgressRepairs.splice(currentId,1);
    this.progress=100*this.completeRepairs.length/(this.completeRepairs.length+this.inProgressRepairs.length)

  }


}
