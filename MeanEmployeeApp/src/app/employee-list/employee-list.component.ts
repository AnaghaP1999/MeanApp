import { Component, OnInit } from '@angular/core';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  items:any;

  constructor(private service:EmployeeserviceService) {}

  ngOnInit(): void {
  
    this.service.getEmployees().subscribe((data=>{
      this.items=data;
      console.log(data);
      
    }))
  }
}
