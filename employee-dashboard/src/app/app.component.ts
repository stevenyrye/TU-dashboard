import { Component } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DashboardComponent], // Include HttpClientModule here
  template: `<app-dashboard></app-dashboard>`
})
export class AppComponent {}