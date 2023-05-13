import { Component,OnInit} from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  person:Record[]=[];
  record=new Record();
  
  constructor(public recordService:RecordService){

  }
  ngOnInit(): void {
    
  }

  addrecord(){
    this.recordService.addrecord(this.record)
    .subscribe(data=>{
      console.log(data)})
     this.refreshPeople() 
  }

  refreshPeople() {
    this.recordService.getPeople()
      .subscribe(data => {
        console.log(data)
        this.person=data;
      })      
 
  }
  ondelete(id:string){
    this.recordService.ondelete(id)
   
   this.refreshPeople()
  }
 



}


