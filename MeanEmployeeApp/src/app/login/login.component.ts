import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }

  Users = {
    email:'',
    password:''
  }

  constructor(private authserve:AuthserviceService, private router:Router) {}
  display() {

    this.authserve.login(this.Users).subscribe(res=>{
   
      localStorage.setItem('token', res.token);
      localStorage.setItem('role', res.role)
      if(res.role == 'admin') {
        this.router.navigate(['/employeelist']);
      }
      if(res.role == 'user') {
        this.router.navigate(['/employees']);
      }
      
    })
  }
}
