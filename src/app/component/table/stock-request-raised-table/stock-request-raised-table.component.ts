import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-request-raised-table',
  imports: [MatTableModule,CommonModule],
  templateUrl: './stock-request-raised-table.component.html',
  styleUrl: './stock-request-raised-table.component.scss'
})
export class StockRequestRaisedTableComponent {
  displayedColumns: string[] = ['state', 'district', 'block', 'chc', 'phc', 'shc', 'requestDate', 'status'];
  dataSource = [
    { state: 'State 1', district: 'District A', block: 'Block X', chc: 'CHC 1', phc: 'PHC 1', shc: 'SHC 1', requestDate: '2024-03-01', status: 'Pending' },
    { state: 'State 2', district: 'District B', block: 'Block Y', chc: 'CHC 2', phc: 'PHC 2', shc: 'SHC 2', requestDate: '2024-03-02', status: 'Approved' },
    { state: 'State 3', district: 'District C', block: 'Block Z', chc: 'CHC 3', phc: 'PHC 3', shc: 'SHC 3', requestDate: '2024-03-03', status: 'Rejected' }
  ];
}
