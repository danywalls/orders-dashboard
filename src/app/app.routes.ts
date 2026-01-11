import { Routes } from '@angular/router';
import { OrdersDashboardComponent } from './orders-dashboard/orders-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: OrdersDashboardComponent }
];
