import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './template/menu/menu.component';
import { DataTableComponent } from './template/data-table/data-table.component';
import { DataCellComponent } from './template/data-cell/data-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    DataCellComponent,
    DataTableComponent,
    MenuComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
