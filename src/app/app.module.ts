import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ResortComponent } from './resort/resort.component';
import { HallComponent } from './hall/hall.component';
import { BandComponent } from './band/band.component';
import { MarriageHallComponent } from './marriage-hall/marriage-hall.component';
import { SingersComponent } from './singers/singers.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { SeminarComponent } from './seminar/seminar.component';
import { ComponentComponent } from './component/component.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { OpenAirComponent } from './open-air/open-air.component';
import { BirthdayevetsComponent } from './birthdayevets/birthdayevets.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ResortComponent,
    HallComponent,
    BandComponent,
    MarriageHallComponent,
    SingersComponent,
    WorkshopComponent,
    SeminarComponent,
    ComponentComponent,
    FacilitiesComponent,
    OpenAirComponent,
    BirthdayevetsComponent,
  ],
  entryComponents: [
    ResortComponent,
    HallComponent,
    BandComponent,
    SingersComponent,
    WorkshopComponent,
    SeminarComponent,
    ComponentComponent,
    FacilitiesComponent,
    OpenAirComponent,
    BirthdayevetsComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
