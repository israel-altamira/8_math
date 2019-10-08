import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PolygonRenderComponent} from './polygon-render/polygon-render.component';
import {DataService} from './service/data.service';
import {CalculateService} from './service/calculate.service';
import {IteracionService} from './service/iteracion.service';

@NgModule({
  declarations: [
    AppComponent,
    PolygonRenderComponent,
    DataService,
    CalculateService,
    IteracionService
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
