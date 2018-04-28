import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../../domain/models/part'
@Component({
  selector: 'app-part-orders',
  templateUrl: './part-orders.component.html',
  styleUrls: ['./part-orders.component.css']
})
export class PartOrdersComponent implements OnInit {
  public newPart:Part;
  public id:number;
  public edit:boolean[];
  @Input()
  public parts: Part[];
  constructor() { }

  ngOnInit() {
    this.newPart = {}
    this.id=0;
    this.edit=[];
  }

  public addPart(){
    this.id++;
    this.newPart.part_id=this.id;
    this.newPart.status='Ordered';
    this.parts.push(this.newPart);
    console.log(this.newPart)
    this.newPart={}
  }

  public changeStatus(partID:number,status:string){
    let currentId;
    for(let x = 0;x<this.parts.length;x++){
      if(this.parts[x].part_id==partID){
        currentId = x;
      }
    }
    this.parts[currentId].status=status;
    console.log(this.parts[currentId].status);
    this.edit[currentId]=!this.edit[currentId];
  }
}
