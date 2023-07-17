import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  constructor(private http:HttpClient) { }

  addEmployees(data:any) {
    return this.http.post<any>('http://localhost:3000/addEmployee',data);
  }

  getEmployees() {
    return this.http.get('http://localhost:3000/employeelist');
  }
}
