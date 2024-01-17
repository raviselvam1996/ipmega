import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  users:any;
  result: any;
 
  constructor(private http:HttpClient,private route:Router,private authservice:AuthService){

  }
  form:FormGroup=new FormGroup({
    username:new FormControl(),
    paassword:new FormControl()


  })

login(){
  
    console.log(this.form.value);
    this.http.get<any>('http://localhost:3000/person')
    .subscribe((res)=>{
      console.log(res)
      const user=res.find((a:any)=>{
         return a.yname == this.form.value.username && a.password == this.form.value.paassword;
      })
      if(user){
        // alert('suucessfully login');
        this.result='suucessfully login'
        // this.route.navigate(['home']);
        this.route.navigateByUrl('home');
        this.authservice.login();
      }
      else {
        // alert('user not found')
        this.result='user not found'

      }
     
    
    })
  
   
  }
}







