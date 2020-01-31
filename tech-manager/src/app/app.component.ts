import { Component } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tech Manager';
  item: any = {};
  cols: any = [];

  constructor(
    private baseService: BaseService,
    private configService: ConfigService
  ) {

  }

  ngOnInit(){
    this.item = this.baseService.getAll('items');
    this.cols = this.configService.cols.items;
  }
}
