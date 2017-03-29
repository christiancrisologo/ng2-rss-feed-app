import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
 
import {MaterialModule} from '@angular/material'; 

import { AppComponent } from './app.component';
import { RssCardComponent } from './components/rss-card/rss-card.component';
import { StripHtmlTagsPipe } from './filters/strip-html-tags.pipe';
import {RssService} from './services/rss.service';
import { SpinnerComponent } from './components/spinner/spinner.component'


@NgModule({
  declarations: [
    AppComponent,
    RssCardComponent,
    StripHtmlTagsPipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // angular material
    MaterialModule,
 
  ],
  providers: [RssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
