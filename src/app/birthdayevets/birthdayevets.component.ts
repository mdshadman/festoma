import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceproviderService } from '../serviceprovider.service';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-birthdayevets',
  templateUrl: './birthdayevets.component.html',
  styleUrls: ['./birthdayevets.component.scss']
})
export class BirthdayevetsComponent implements OnInit {
  slideOpts = {
    effect: 'flip',
    autoplay: {
      delay: 2000,
    },
    direction: 'horizontal',
    loop: false
  };
  parentsImage: { "topImage": string; }[];
   datesheet: { "day": string; }[];
  facilities: any;
  @Input() value: any;
  navData: any;
  scrollValue:any
  segmentButtons: { 'buttons': { 'value': string; 'cardImage': string; 'label': string; 'iconName': string; }[]; };
  banquetHalls: { name: string; type: { "title": string; "image": string; }[]; }[];
  garden: { name: string; type: { "title": string; "image": string; }[]; }[];
  motel: { name: string; type: { "title": string; "image": string; }[]; }[];
  openAir: { name: string; type: ({ "title": string; "image": string; "openAirDetails": { "image": string; }[]; } | { "title": string; "image": string; "openAirDetails"?: undefined; })[]; }[];
  constructor(public actvRoute: ActivatedRoute, public service: ServiceproviderService, public modal: ModalController,
    public navParam: NavParams) {
    
   this.navData =  this.navParam.get('value')
    console.log(this.navData);


    this.parentsImage = this.service.getData().parentsImages.Images
    console.log(this.parentsImage);

    this.datesheet = this.service.getData().calender.date
    console.log(this.datesheet)
    
    this.facilities = this.service.getData().resort
    console.log(this.facilities);
    this.banquetHalls = this.service.getData().banquetHalls
    console.log(this.facilities);
    this.garden = this.service.getData().garden
    console.log(this.facilities);
    this.motel = this.service.getData().motel
    console.log(this.facilities);
    this.openAir = this.service.getData().openAir
    

    this.segmentButtons = this.service.getData().segments
    console.log(this.facilities)

  }
  selectDate(item:any) {
    console.log(item)
  }

  ngOnInit() {
  }
  closeComp() {
    this.modal.dismiss();
  }


  customAlertOptions: any = {
    header: 'Pizza Toppings',
    subHeader: 'Select your toppings',
    message: '$1.00 per topping',
    translucent: true
  };

  customPopoverOptions: any = {
    header: 'Hair Color',
    subHeader: 'Select your hair color',
    message: 'Only select your dominant hair color'
  };

  customActionSheetOptions: any = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };
segmentChanged(event){
this.scrollValue = event.detail.value;
console.log(this.scrollValue );

}
}
