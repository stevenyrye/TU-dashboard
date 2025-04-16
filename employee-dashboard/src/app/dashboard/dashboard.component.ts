import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 Needed for *ngFor, etc.
import { FormsModule } from '@angular/forms';   // 👈 Needed for [(ngModel)]
import { Employee, EmployeeService } from '../employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true, // 👈 required
  imports: [CommonModule, FormsModule], // 👈 include required modules here
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = {
    name: '',
    address: '',
    dateOfBirth: '',
    phoneNo: '',
    title: '',
    sin: ''
  };

  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    console.log('DashboardComponent initialized');
    this.loadEmployees();
  }

  loadEmployees(): void {
    console.log('Loading employees...');
    this.empService.getEmployees().subscribe(data => {
      console.log('Employees loaded:', data);  // Log the data coming back
      this.employees = data;
    });
  }
  addEmployee(): void {
      this.empService.addEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = {
        name: '',
        address: '',
        dateOfBirth: '',
        phoneNo: '',
        title: '',
        sin: ''
      };
    });
  }

  deleteEmployee(id?: number): void {
    if (id) {
      this.empService.deleteEmployee(id).subscribe(() => this.loadEmployees());
    }
  }
}