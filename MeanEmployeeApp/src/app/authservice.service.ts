import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(public http:HttpClient) { }

  login(data:any){
    return this.http.post<any>('http://localhost:3000/login',data);
  }
}
