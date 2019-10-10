import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PoligonoComponent } from './component/poligono/poligono.component';
import { TablaComponent } from './component/tabla/tabla.component';

@NgModule({
  declarations: [
    PoligonoComponent,
    AppComponent,
    TablaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
