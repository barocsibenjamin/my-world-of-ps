import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { DataTableComponent } from './template/data-table/data-table.component';
import { DataCellComponent } from './template/data-cell/data-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent,
    DataCellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
