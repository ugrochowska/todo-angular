import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { FooterComponent } from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
