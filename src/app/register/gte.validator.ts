import { AbstractControl, ValidationErrors } from '@angular/forms'
 
import { Observable, of } from 'rxjs';
 
export function gte(control: AbstractControl): 
         Observable<ValidationErrors> | any {
 
    const v:number=+control.value;
 
    console.log(v)
    
    if (isNaN(v)) {
      return of({ 'gte': true, 'requiredValue': 10 })
    }      
 
    if (v <= 10) {
      return of({ 'gte': true, 'requiredValue': 10 })
    } 
 
    return of(null)
 
}