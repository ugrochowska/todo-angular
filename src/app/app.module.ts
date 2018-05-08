import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListService} from './list.service';
import {ItemService} from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule
  ],
  providers: [ListService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
