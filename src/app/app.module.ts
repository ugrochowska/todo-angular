import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {ListComponent} from './list/list.component';
import {FooterComponent} from './footer/footer.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListService} from './list.service';
import {AppRoutingModule} from './/app-routing.module';
import {FilteredListPipe} from './list/filtered-list.pipe';
import {AutoFocusDirective} from './auto-focus.directive';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListComponent,
    FooterComponent,
    FilteredListPipe,
    AutoFocusDirective
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, ReactiveFormsModule, AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
