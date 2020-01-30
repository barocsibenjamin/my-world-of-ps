import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  cols: {key: string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'number', text: 'Number'},
    {key: 'name', text: 'Name'},
    {key: 'type', text: 'Type'},
    {key: 'room', text: 'Room'},
    {key: 'provider', text: 'Provider'}
  ];
  
  item: any = {
      id: '1',
      number: '1',
      name: 'Dell',
      type: 'laptop',
      room: 'Storage',
      provider: 'Barócsi Benjámim'
  };

  constructor() { }

  ngOnInit() {
  }

  onUpdate(event): void {
    alert(`Clicked on ${event} button.`)
  }

  onDelete(event): void {
    alert(`Clicked on ${event} button.`)
  }

}
