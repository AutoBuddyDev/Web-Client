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
  public progress:number;
  public crosshair: boolean;
  public crosshairCursor:boolean;
  public crosshairX: number;
  public crosshairY: number;

  constructor() { }

  ngOnInit() {
    this.crosshairCursor=false;
    this.crosshair=false;
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
    if(this.newRepair.completed){
      this.completeRepairs.push(this.newRepair);
    }
    else{
      this.inProgressRepairs.push(this.newRepair);
      let image = document.getElementById('carPhoto');
      // relative placing of circle based on width/height ratio
      let xPosImage = image.clientWidth*this.newRepair.x;
      let yPosImage = image.clientHeight*this.newRepair.y;
      // offset of image posiition
      let imageOffsetX = image.offsetLeft;
      let imageOffsetY = image.offsetTop;
      // final position of dot = offset + relative
      this.newRepair.x = xPosImage+imageOffsetX-45;
      this.newRepair.y = yPosImage+imageOffsetY+50;

      console.log(this.newRepair.x);
      console.log(this.newRepair.y);
    }
    this.crosshairCursor=false;
    this.progress=100*this.completeRepairs.length/(this.completeRepairs.length+this.inProgressRepairs.length)
    this.newRepair={
      parts:[]
    }
    this.part="";
  }
  onMousedown(event) {
      this.crosshairX = event.offsetX;
      this.crosshairY = event.offsetY;
      this.newRepair.x = event.offsetX / event.target.clientWidth;
      this.newRepair.y = event.offsetY / event.target.clientHeight;
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
