import { Component } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { FilterDescriptor, CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { FilterService } from '@progress/kendo-angular-grid';

export interface Order {
    id: number;
    customer: string;
    date: Date;
    status: string;
    total: number;
}

@Component({
    selector: 'app-orders-dashboard',
    standalone: true,
    imports: [
        GridModule,
        ButtonsModule,
        LayoutModule,
        ToolBarModule,
        DropDownsModule
    ],
    templateUrl: './orders-dashboard.html',
    styleUrl: './orders-dashboard.scss',
})
export class OrdersDashboardComponent {
    public orders: Order[] = [
        { id: 1, customer: 'John Smith', date: new Date('2024-01-10'), status: 'Completed', total: 1250.50 },
        { id: 2, customer: 'Sarah Johnson', date: new Date('2024-01-11'), status: 'Pending', total: 890.75 },
        { id: 3, customer: 'Michael Brown', date: new Date('2024-01-12'), status: 'Processing', total: 2340.00 },
        { id: 4, customer: 'Emily Davis', date: new Date('2024-01-13'), status: 'Completed', total: 567.25 },
        { id: 5, customer: 'Robert Wilson', date: new Date('2024-01-14'), status: 'Pending', total: 1890.50 },
        { id: 6, customer: 'Lisa Anderson', date: new Date('2024-01-15'), status: 'Shipped', total: 450.00 },
        { id: 7, customer: 'David Martinez', date: new Date('2024-01-16'), status: 'Completed', total: 3200.75 },
        { id: 8, customer: 'Jennifer Taylor', date: new Date('2024-01-17'), status: 'Processing', total: 780.25 }
    ];

    public statusCategories: string[] = ['Completed', 'Pending', 'Processing', 'Shipped'];

    createNewOrder(): void {
        console.log('Creating new order...');
    }

    public onStatusChange(value: string, filterService: FilterService): void {
        const filter: CompositeFilterDescriptor = {
            logic: 'and',
            filters: [{ field: 'status', operator: 'eq', value: value }]
        };
        filterService.filter(filter);
    }
}
