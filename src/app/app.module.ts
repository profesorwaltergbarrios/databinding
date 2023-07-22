import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EventBindingComponent } from './componentes/event-binding/event-binding.component';
import { TwoWayComponent } from './componentes/two-way/two-way.component';
import { FormsModule } from '@angular/forms';
import { InterpolacionComponent } from './componentes/interpolacion/interpolacion.component';
import { PropertyComponent } from './componentes/property/property.component';
import { ClassBindingComponent } from './componentes/class-binding/class-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventBindingComponent,
    TwoWayComponent,
    InterpolacionComponent,
    PropertyComponent,
    ClassBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
