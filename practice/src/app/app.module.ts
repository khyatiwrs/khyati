import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ServicesService} from './services.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { SevicesComponent } from './sevices/sevices.component';
import { HomeComponent } from './home/home.component';
import { JobfairComponent } from './jobfair/jobfair.component';
import { LearncssComponent } from './learncss/learncss.component';
import { PseudoComponent } from './pseudo/pseudo.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PseudoelementComponent } from './pseudoelement/pseudoelement.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    SevicesComponent,
    HomeComponent,
    JobfairComponent,
    LearncssComponent,
    PseudoComponent,
    PseudoelementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,ReactiveFormsModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
