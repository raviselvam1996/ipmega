import { Component, OnInit, ViewChild } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  person: Record[] = [];
  record = new Record();
  @ViewChild('contactForm') form!: NgForm;
  currentperson: any;
  editmode: boolean = false;
  currentid: any;
  ravirec: any;
  yname: any;
  email: any;
  password: any;
  pnumber: any;

  constructor(public recordService: RecordService) {}
  ngOnInit(): void {
    this.refreshPeople();
  }

  addrecord() {
    if (!this.editmode) {
      this.recordService.addrecord(this.record).subscribe((data) => {
        console.log(data);
      });
    } else {
      this.recordService.uptateperson(this.currentid, this.record);
    }
    this.refreshPeople();
  }

  refreshPeople() {
    this.recordService.getPeople().subscribe((data) => {
      console.log(data);
      this.person = data;
    });
  }
  ondelete(id: string) {
    this.recordService.ondelete(id);

    this.refreshPeople();
  }
  // onedit23(id:string,value:Record){
  // this.ravirec= this.recordService.uptateperson(id,value)
  //   console.log(this.ravirec)

  // }
  onedit2(id: string) {
    this.currentid = id;
    this.currentperson = this.person.find((p) => {
      return p.id === id;
    });
    console.log(this.form);
    this.form.setValue({
      yname: this.currentperson.yname,
      email: this.currentperson.email,
      pnumber: this.currentperson.pnumber,
      password: this.currentperson.password,
      cpassword: this.currentperson.cpassword,
    });
    this.editmode = true;
  }

  canexit() {
    if (this.yname || this.email || this.pnumber || this.password) {
      return confirm('if you to go');
    } else {
      return false;
    }
  }
}
