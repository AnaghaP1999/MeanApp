import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  constructor(private serv:EmployeeserviceService) {}

  ngOnInit(): void {
  }

  employee = {
    name:'',
    designation:'',
    location:'',
    salary:''
  }

  saveData() {console.log(this.employee);
  
    this.serv.addEmployees(this.employee).subscribe((res => {
      alert('Employee Added');
    }));
  }
}
