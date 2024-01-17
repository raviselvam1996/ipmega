import { Component, OnInit, ViewChild } from '@angular/core';

import { Record } from '../record';
import { RecordService } from '../record.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-uptate',
  templateUrl: './uptate.component.html',
  styleUrls: ['./uptate.component.css'],
})
export class UptateComponent {
  person: Record[] = [];
  record = new Record();

  currentperson: any;

  currentid: any;

  id: any;

  persons: any;

  constructor(
    public recordService: RecordService,
    private Activatedroute: ActivatedRoute
  ) {}
  ngOnInit() {
    this.id = this.Activatedroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.currentperson = this.recordService.getperson(this.id)
      .subscribe((_result: any) => {
        console.log(_result.yname);
        this.record.yname = _result.yname;
        this.record.email = _result.email;
        this.record.pnumber = _result.pnumber;
        this.record.password = _result.password;
        this.record.cpassword = _result.cpassword;
      });
  }

  // addrecord(){
  //   if(!this.editmode){
  //   this.recordService.addrecord(this.record)
  //   .subscribe(data=>{
  //     console.log(data)})
  //   }
  //   else{
  //     this.recordService.uptateperson(this.currentid,this.record)
  //   }
  //    this.refreshPeople()
  // }

  // refreshPeople() {
  //   this.recordService.getPeople()
  //     .subscribe(data => {
  //       console.log(data)
  //       this.person=data;

  //     })

  // }
  // ondelete(id:string){
  //   this.recordService.ondelete(id)

  //  this.refreshPeople()

  // }
  // onedit23(id:string,value:Record){
  // this.ravirec= this.recordService.uptateperson(id,value)
  //   console.log(this.ravirec)

  // }
  //   onedit2(id:string){
  //     this.currentid=id;
  //     this.currentperson =this.person.find((p) =>{return p.id === id})
  //  console.log(this.form)
  //  this.form.setValue({
  //   yname:this.currentperson.yname,
  //   email:this.currentperson.email,
  //   pnumber:this.currentperson.pnumber,
  //   password:this.currentperson.password,
  //   cpassword:this.currentperson.cpassword

  //  })

  //  this.editmode=true;

  //  }
  update() {
    this.recordService.uptateperson(this.id, this.record);
  }
}
