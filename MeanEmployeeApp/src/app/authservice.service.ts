import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  private isLoggedIn = false;

  constructor(public http:HttpClient, private router:Router) { }

  login(data:any){
    this.isLoggedIn = true;
    
    return this.http.post<any>('http://localhost:3000/login',data);
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate([''])
    this.isLoggedIn = false;
  }

  isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }
}
