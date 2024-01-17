import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { UptateComponent } from './uptate/uptate.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    DetailsComponent,
    SearchComponent,
    LoginComponent,
    UptateComponent,
    

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
