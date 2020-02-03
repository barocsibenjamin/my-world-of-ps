import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Tech Manager';
  item: any = {};
  cols: any = [];
  listSubscription: Subscription;

  constructor(
    private baseService: BaseService,
    private configService: ConfigService
  ) {

  }

  ngOnInit(){
    this.cols = this.configService.cols.items;
    this.listSubscription =
     this.baseService.getAll('items').subscribe(
       list => this.item = list,
       err => console.error(err),
       () => console.log('unsubscribed')
     )
  }

  ngOnDestroy(){
    this.listSubscription.unsubscribe();
  }
}
