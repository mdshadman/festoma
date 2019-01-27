import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServiceproviderService {
  parentsData: any;

  constructor(public modal: ModalController, public router: Router) { }
  async gotoModal(component, props) {
    console.log(props);
    const openModal = await this.modal.create({
      component: component,
      componentProps: { value: props }

    });
    return await openModal.present()
  }
  gotoRoute(link) {
    this.router.navigate([link]);
  }
  getData() {
    return this.parentsData = {
      'parentsImages': {
        'Images': [
          { "topImage": '../assets/img/parents1.jpg' },
          { "topImage": '../assets/img/parents2.jpg' },
          { "topImage": '../assets/img/parents3.jpg' },
          { "topImage": '../assets/img/parents4.jpg' },
          { "topImage": '../assets/img/parents5.jpg' },
          { "topImage": '../assets/img/parents6.jpg' },
          { "topImage": '../assets/img/parents7.jpg' },
          { "topImage": '../assets/img/parents8.jpg' },

        ]
      },
      'calender': {
        'date': [
          {
            "day": 'mon',
          }, {
            "day": 'tue',
          }, {
            "day": 'wed',
          }, {
            "day": 'thurs',
          }, {
            "day": 'fri',
          }, {
            "day": 'sat',
          }
        ]
      },
      'segments': {
        'buttons': [{
          'value': 'resort',
          'cardImage': 'linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)), url(../assets/img/resort1.jpg)',
          'label': 'Resort',
          'iconName': 'home'
        },
        {
          'value': 'banquetHalls',
          'cardImage': 'linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)), url(../assets/img/resort1.jpg)',
          'label': 'banquetHalls',
          'iconName': 'home'
        }, {
          'value': 'garden',
          'cardImage': 'linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)), url(../assets/img/resort1.jpg)',
          'label': 'garden',
          'iconName': 'home'
        }, {
          'value': 'motel',
          'cardImage': 'linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)), url(../assets/img/resort1.jpg)',
          'label': 'motel',
          'iconName': 'home'
        }, {
          'value': 'openAir',
          'cardImage': 'linear-gradient(0deg,rgba(88, 87, 88, 0.3),rgba(94, 93, 94, 0.3)), url(../assets/img/resort1.jpg)',
          'label': 'openAir',
          'iconName': 'home'
        }]
      },
      'facilities': [{
        name: 'openAir',
        type: [
          {
            "title": 'Asteria',
            "image": '../../assets/img/open1.jpg',
            "openAirDetails": [{
              "image": '../../assets/img/open1.jpg',

            }]
          }, {
            "title": 'Barbique Nantion(BBQ)',
            "image": '../../assets/img/open2.jpg',
          }, {
            "title": 'Silver oak',
            "image": '../../assets/img/open3.jpg',
          }, {
            "title": 'Chinese chings',
            "image": '../../assets/img/open4.jpg',
          }, {
            "title": 'Masala Chowk',
            "image": '../../assets/img/open5.jpg',
          }
        ]
      },
      {
        name: 'banquetHalls',
        type: [{
          "title": 'Albenia',
          "image": '../assets/img/ban1.jpg',
        }, {
          "title": 'Nikatia',
          "image": '../assets/img/ban2.jpg',
        }, {
          "title": 'La Stella Banquet',
          "image": '../assets/img/ban3.jpg',
        }, {
          "title": 'Grand Imperia Banquet',
          "image": '../assets/img/ban4.jpg',
        }, {
          "title": 'Grand Imperia Banquet',
          "image": '../assets/img/ban5.jpg',
        }]
      }, {
        name: 'garden',
        type: [{
          "title": 'Lodhi Garden',
          "image": '../assets/img/garden1.jpg',
        }, {
          "title": 'Garden Of Five Senses',
          "image": '../assets/img/garden2.jpg',
        }, {
          "title": 'Mughal Gardens',
          "image": '../assets/img/garden3.jpg',
        }, {
          "title": 'Leisure Valley Park',
          "image": '../assets/img/garden4.jpg',
        }, {
          "title": 'Shanti Van',
          "image": '../assets/img/garden5.jpg',
        }]
      }, {
        name: 'motel',
        type: [{
          "title": 'Deco Walk Hostel',
          "image": '../assets/img/motel1.jpg',
        }, {
          "title": 'SoBe Hostel & Bar',
          "image": '../assets/img/motel2.jpg',
        }, {
          "title": 'Stratosphere Hotel',
          "image": '../assets/img/motel3.jpg',
        }, {
          "title": 'Alamo Plaza',
          "image": '../assets/img/motel4.jpg',
        }, {
          "title": 'Aztec Motel',
          "image": '../assets/img/motel5.jpg',
        }]
      }, {
        name: 'resort',
        type: [{
          "title": 'The Ranch at Rock Creek',
          "image": '../assets/img/resort1.jpg',
        }, {
          "title": 'Rosewood CordeValle',
          "image": '../assets/img/resort2.jpg',
        }, {
          "title": 'Sanderling Resort',
          "image": '../assets/img/resort3.jpg',
        }, {
          "title": 'The Lodge at Pebble Beach',
          "image": '../assets/img/resort4.jpg',
        }, {
          "title": 'Salish Lodge & Spa',
          "image": '../assets/img/resort5.gif',
        }]
      },
      ],
      'openAir': [{
        name: 'openAir',
        type: [
          {
            "title": 'Asteria',
            "image": '../../assets/img/open1.jpg',
            "openAirDetails": [{
              "image": '../../assets/img/open1.jpg',

            }]
          }, {
            "title": 'Barbique Nantion(BBQ)',
            "image": '../../assets/img/open2.jpg',
          }, {
            "title": 'Silver oak',
            "image": '../../assets/img/open3.jpg',
          }, {
            "title": 'Chinese chings',
            "image": '../../assets/img/open4.jpg',
          }, {
            "title": 'Masala Chowk',
            "image": '../../assets/img/open5.jpg',
          }
        ]
      }],
      'banquetHalls': [{
        name: 'banquetHalls',
        type: [{
          "title": 'Albenia',
          "image": '../assets/img/ban1.jpg',
        }, {
          "title": 'Nikatia',
          "image": '../assets/img/ban2.jpg',
        }, {
          "title": 'La Stella Banquet',
          "image": '../assets/img/ban3.jpg',
        }, {
          "title": 'Grand Imperia Banquet',
          "image": '../assets/img/ban4.jpg',
        }, {
          "title": 'Grand Imperia Banquet',
          "image": '../assets/img/ban5.jpg',
        }]
      }],
      'garden': [{
        name: 'garden',
        type: [{
          "title": 'Lodhi Garden',
          "image": '../assets/img/garden1.jpg',
        }, {
          "title": 'Garden Of Five Senses',
          "image": '../assets/img/garden2.jpg',
        }, {
          "title": 'Mughal Gardens',
          "image": '../assets/img/garden3.jpg',
        }, {
          "title": 'Leisure Valley Park',
          "image": '../assets/img/garden4.jpg',
        }, {
          "title": 'Shanti Van',
          "image": '../assets/img/garden5.jpg',
        }]
      }],
      'motel': [{
        name: 'motel',
        type: [{
          "title": 'Deco Walk Hostel',
          "image": '../assets/img/motel1.jpg',
        }, {
          "title": 'SoBe Hostel & Bar',
          "image": '../assets/img/motel2.jpg',
        }, {
          "title": 'Stratosphere Hotel',
          "image": '../assets/img/motel3.jpg',
        }, {
          "title": 'Alamo Plaza',
          "image": '../assets/img/motel4.jpg',
        }, {
          "title": 'Aztec Motel',
          "image": '../assets/img/motel5.jpg',
        }]
      }],
      'resort': [{
        name: 'resort',
        type: [{
          "title": 'The Ranch at Rock Creek',
          "image": '../assets/img/resort1.jpg',
        }, {
          "title": 'Rosewood CordeValle',
          "image": '../assets/img/resort2.jpg',
        }, {
          "title": 'Sanderling Resort',
          "image": '../assets/img/resort3.jpg',
        }, {
          "title": 'The Lodge at Pebble Beach',
          "image": '../assets/img/resort4.jpg',
        }, {
          "title": 'Salish Lodge & Spa',
          "image": '../assets/img/resort5.gif',
        }]
      }],
    }
  }
}