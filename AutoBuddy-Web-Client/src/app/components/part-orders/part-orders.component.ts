import { GarageRepository } from './../../domain/garage-repository';
import { Component, OnInit, Input } from '@angular/core';
import { Part } from '../../domain/models/part'
import { PartRepository } from '../../domain/part-repository';
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
  constructor(private partRepository: PartRepository,
    private garageRepository: GarageRepository
  ) { }

  ngOnInit() {
    this.newPart = {}
    this.id=0;
    this.edit=[];
    this.partRepository.showParts().subscribe(data =>{
      this.parts = data;
    })
  }

  public addPart(){
    this.newPart.part_status="Ordered";

    this.partRepository.addPart(this.newPart).subscribe(res =>{
      this.parts.push(this.newPart);
      this.newPart={}
    })

  }

  public changeStatus(partID:number,status:string){
    let currentId;
    for(let x = 0;x<this.parts.length;x++){
      if(this.parts[x].part_id==partID){
        currentId = x;
      }
    }
    const updatedInfo = {
      part_id: partID,
      part_status: status
    }
    this.partRepository.updatePartStatus(updatedInfo).subscribe(res => {
      console.log("res: ",res);
      this.parts[currentId].part_status=status;
      console.log(this.parts[currentId].part_status);
      this.edit[currentId]=!this.edit[currentId];
    })

  }

}
