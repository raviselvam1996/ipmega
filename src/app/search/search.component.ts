import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchtext:string='';

  @Output()

  searchchange:EventEmitter<string>=new EventEmitter<string>();

  searchmethod(){
    this.searchchange.emit(this.searchtext)
  }

}
