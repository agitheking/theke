import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { ShiftDetailComponent } from './shift-detail/shift-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShiftsComponent,
    ShiftDetailComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
