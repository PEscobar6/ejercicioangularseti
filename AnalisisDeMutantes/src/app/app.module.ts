import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MutantDetectorComponent } from './mutant-detector/mutant-detector.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    MutantDetectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [MutantDetectorComponent]
})
export class AppModule { }
