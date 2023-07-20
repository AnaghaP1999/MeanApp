import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { authGuard } from './auth.guard';
import { roleGuard } from './role.guard';
import { EmployeesComponent } from './employees/employees.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'employees',component:EmployeesComponent},
{path:'employeelist',component:EmployeeListComponent,canActivate: [authGuard, roleGuard],
data: {
  role: 'ADMIN'
}  },
{path:'addemployee',component:AddEmployeeComponent,canActivate: [authGuard, roleGuard],
  data: {
    role: 'ADMIN'
  }  
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
