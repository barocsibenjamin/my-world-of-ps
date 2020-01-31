import { Component, OnInit, Input } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() list: any[];
  @Input() cols: any[];

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
  }

  onUpdate(event): void {
    alert(`Clicked on ${event} button.`)
  }

  onDelete(event): void {
    alert(`Clicked on ${event} button.`)
  }

}
