import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { BirthdayevetsComponent } from '../birthdayevets/birthdayevets.component';
import { ServiceproviderService } from '../serviceprovider.service';
@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.page.html',
  styleUrls: ['./birthday.page.scss'],
})
export class BirthdayPage implements OnInit {

  private selectedItem: any;
  slideOpts = {
    effect: 'flip',
    autoplay: {
      delay: 2000,
    },
    direction: 'horizontal',
    loop: true
  };
  public Data = [{
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': 'For Parents',
    'subtitle': '11 Specialities',
    'link': 'For_Parents'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-amsterdam.png',
    'title': 'For In-Laws',
    'subtitle': '4 Surprises',
    'link': 'For_In-Laws'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-sf.png',
    'title': 'For a Freind',
    'subtitle': '6 Surprises',
    'link': 'For_a_Freind'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-madison.png',
    'title': 'Some One special',
    'subtitle': 'Complete surprise',
    'link': 'Some_One _pecial'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'link': 'Destination Hideout'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'link': 'Wing Ding'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'link': 'Birthday'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'link': 'Birthday'
  }, {
    'name': 'Birthday',
    'image': '../../assets/img/card-saopaolo.png',
    'title': '41 Listings',
    'subtitle': '41 Listings',
    'link': 'Birthday'
    }];
  @Input() value: any;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public route: Router, public modal: ModalController, public services: ServiceproviderService) { }

  ngOnInit() {
  }
  gotoType(item:any, i:any) {
    this.services.gotoModal(BirthdayevetsComponent, { item:item });
    this.modal.dismiss();
    console.log('modal dismissed', item, i);
  }
  closeComp() {
    this.modal.dismiss();

  }
}


