import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  cols: {key: string, text: string}[] = [
    {key: 'number', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'type', text: 'Type'},
    {key: 'room', text: 'Room'},
    {key: 'provider', text: 'Provider'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
