import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Record } from './record';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  baseURL:string= "http://localhost:3000/";

  constructor(public http:HttpClient) { }
  
  addrecord(record:Record):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(record);
    console.log(body)
  //  return this.http.post(this.baseURL+'person',body,{'headers':headers});
  return this.http.post(this.baseURL+'person',body,{'headers':headers});
  }

  getPeople(): Observable<Record[]> {
    console.log('getPeople '+this.baseURL + 'person')
    return this.http.get<Record[]>(this.baseURL + 'person')
    
  }
  ondelete(id:string){
     const headers = { 'content-type': 'application/json'}  
    this.http.delete('http://localhost:3000/person/'+id)
    .subscribe()
  }
  uptateperson(id:string,value:Record){
    this.http.put('http://localhost:3000/person/'+id,value)
    .subscribe();

  }
  getperson(id:any){
    return this.http.get('http://localhost:3000/person/'+id)
    
  }
  


}
