import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { RankingComponent } from './ranking/ranking.component';
import { RankingService } from './ranking.service';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    RankingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule
  ],
  providers: [RankingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
