import { Component } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  person:Record[]=[];
  record=new Record();
  
  constructor(public recordService:RecordService){

  }
  ondelete(id:string){
    this.recordService.ondelete(id)
   
  
  }

  refreshPeople() {
    this.recordService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.person=data;
      }) 

}
}
