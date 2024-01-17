import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { UptateComponent } from './uptate/uptate.component';

import { CanactivateGuard } from './canactivate.guard';
import { DeactivateGuard } from './deactivate.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

  { path: 'details', component: DetailsComponent },
  { path: 'register',canDeactivate:[DeactivateGuard], component: RegisterComponent},
  // ,canActivate:[CanactivateGuard]
  { path: 'uptate/:id', component: UptateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  
})
export class AppRoutingModule {}
