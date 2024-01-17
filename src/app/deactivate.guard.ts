import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root',
})
export class DeactivateGuard implements CanDeactivate<RegisterComponent> {
  canDeactivate(
    _component: RegisterComponent,
    _currentRoute: ActivatedRouteSnapshot,
    _currentState: RouterStateSnapshot,
    _nextState?: RouterStateSnapshot
  ) {
    

    return _component.canexit();
  }
}
