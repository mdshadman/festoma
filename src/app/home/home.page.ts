import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HallComponent } from '../hall/hall.component';
import { BandComponent } from '../band/band.component';
import { MarriageHallComponent } from '../marriage-hall/marriage-hall.component';
import { SingersComponent } from '../singers/singers.component';
import { WorkshopComponent } from '../workshop/workshop.component';
import { SeminarComponent } from '../seminar/seminar.component';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { OpenAirComponent } from '../open-air/open-air.component';
import { BirthdayComponent } from '../birthday/birthday.component';
import { ServiceproviderService } from '../serviceprovider.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private selectedItem: any;
  public Data = [{
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': 'birthday'
  }, {
    'name': 'Open Mic',
    'image': '../../assets/img/card-amsterdam.png',
    'title': '64 Listings',
    'subtitle': '64 Listings',
    'component': HallComponent
  }, {
    'name': 'Kitty Party',
    'image': '../../assets/img/card-sf.png',
    'title': '72 Listings',
    'subtitle': 'San Francisco',
    'component': BandComponent
  }, {
    'name': 'Destination Dine',
    'image': '../../assets/img/card-madison.png',
    'title': '28 Listings',
    'subtitle': 'Madison',
    'component': MarriageHallComponent
  }, {
    'name': 'Destination Hideout',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': SingersComponent
  }, {
    'name': 'Wing Ding',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': WorkshopComponent
  }, {
    'name': 'São Paulo',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': SeminarComponent
  }, {
    'name': 'São Paulo',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': OpenAirComponent
  }, {
    'name': 'São Paulo',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': FacilitiesComponent
  }];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public modalCtrl: ModalController, public services: ServiceproviderService) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }
  async gotoPage(pages: any) {
  // await  this.services.gotoModal(aditya,{})
  this.services.gotoRoute(pages)
  }
}
