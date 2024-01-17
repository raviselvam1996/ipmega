import { Component } from '@angular/core';
import { Record } from '../record';
import { RecordService } from '../record.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  [x: string]: any;
  person: Record[] = [];
  record = new Record();

  searchpar: string = '';
  currentperson: any;
  currentid: any;

  constructor(public recordService: RecordService, public route: Router) {}
  ondelete(id: string) {
    this.recordService.ondelete(id);

    this.refreshPeople();
  }

  refreshPeople() {
    this.recordService.getPeople().subscribe((data) => {
      console.log(data);
      this.person = data;
    });
  }

  onsearchmethod(searchvalue: string) {
    this.searchpar = searchvalue;
  }
  onedit2(id: string) {
    this.currentid = id;
    console.log(this.currentid);
    this.currentperson = this.person.find((p) => {
      return p.id === id;
    });
    console.log(this.currentperson);

    this.recordService.uptateperson(this.currentid, this.record);
    // this.route.navigateByUrl('register');
  }

}
