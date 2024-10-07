import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.scss'
})
export class EmployeeDetailComponent {
  employeeData = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR' },
    { id: 3, name: 'Mark Johnson', position: 'Designer', department: 'UI/UX' }
  ];
}
