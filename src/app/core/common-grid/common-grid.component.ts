import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-common-grid',
  templateUrl: './common-grid.component.html',
  styleUrl: './common-grid.component.scss'
})
export class CommonGridComponent {
 // Input property to accept the data array
 @Input() data: any[] = [];

 // Function to get object keys dynamically
 objectKeys = Object.keys;
}
