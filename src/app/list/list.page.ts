import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HallComponent } from '../hall/hall.component';
import { BandComponent } from '../band/band.component';
import { MarriageHallComponent } from '../marriage-hall/marriage-hall.component';
import { SingersComponent } from '../singers/singers.component';
import { WorkshopComponent } from '../workshop/workshop.component';
import { SeminarComponent } from '../seminar/seminar.component';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { OpenAirComponent } from '../open-air/open-air.component';
import { ResortComponent } from '../resort/resort.component';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public Data = [{
    'name': 'São Paulo',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': ResortComponent
  }, {
    'name': 'Amsterdam',
    'image': '../../assets/img/card-amsterdam.png',
    'title': '64 Listings',
    'subtitle': '64 Listings',
    'component': HallComponent
  }, {
    'name': 'San Francisco',
    'image': '../../assets/img/card-sf.png',
    'title': '72 Listings',
    'subtitle': 'San Francisco',
    'component': BandComponent
  }, {
    'name': 'Madison',
    'image': '../../assets/img/card-madison.png',
    'title': '28 Listings',
    'subtitle': 'Madison',
    'component': MarriageHallComponent
  }, {
    'name': 'São Paulo',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'component': SingersComponent
  }, {
    'name': 'São Paulo',
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
  constructor(public modalCtrl: ModalController) {
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Item ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  ngOnInit() {
  }
  async openModal(aditya: any) {
    const modal = await this.modalCtrl.create({
      component: aditya
    });
    await modal.present();
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
