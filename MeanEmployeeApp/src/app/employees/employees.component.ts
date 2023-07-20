import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit{
  items:any;
  constructor(private service:EmployeeserviceService) {}

  ngOnInit(): void {
  
    this.service.getEmployees().subscribe((data=>{
      this.items=data;
      console.log(data);
      
    }))
  }
}
