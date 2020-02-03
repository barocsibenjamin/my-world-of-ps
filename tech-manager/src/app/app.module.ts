import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataCellComponent } from './template/data-cell/data-cell.component';
import { DataTableComponent } from './template/data-table/data-table.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './template/menu/menu.component';
import { NgModule } from '@angular/core';
import { ObjectArrayPipe } from './pipe/object-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DataCellComponent,
    DataTableComponent,
    MenuComponent,
    ObjectArrayPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
