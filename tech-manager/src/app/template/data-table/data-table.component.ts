import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { BaseService } from '../../service/base.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() list: any[];
  @Input() cols: any[];

  @Output() create: EventEmitter<any> = new EventEmitter();
  @Output() update: EventEmitter<any> = new EventEmitter();
  @Output() delete: EventEmitter<any> = new EventEmitter();

  phraseKey: string = 'notset';
  newRow: any = {};

  constructor(
    private baseService: BaseService
  ) { }

  ngOnInit() {
  }

  onCreate(row): void {
    if (confirm("Biztos vagy benne, hogy hozzáadod?")) {
    this.create.emit(row);
    }
  }

  onUpdate(row): void {
    if (confirm("Biztos vagy benne, hogy módosítod?")) {
    this.update.emit(row);
  }
}

  onDelete(row): void {
    if (confirm("Biztos vagy benne, hogy törlöd?")) {
    this.delete.emit(row);
    }
  }
}
