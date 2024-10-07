import { Component } from '@angular/core';

@Component({
  selector: 'app-salary-detail',
  templateUrl: './salary-detail.component.html',
  styleUrl: './salary-detail.component.scss'
})
export class SalaryDetailComponent {
 // Sample salary data
 salaryData = [
  { id: 1, name: 'John Doe', salary: '$1000', bonus: '$200' },
  { id: 2, name: 'Jane Smith', salary: '$1200', bonus: '$250' },
  { id: 3, name: 'Mark Johnson', salary: '$900', bonus: '$150' }
];
}
