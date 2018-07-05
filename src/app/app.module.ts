import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],

  declarations: [
    AppComponent,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
