import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-loginsignup',
  templateUrl: './loginsignup.page.html',
  styleUrls: ['./loginsignup.page.scss'],
})
export class LoginsignupPage implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  shownContent: boolean = true;

  constructor(public menuCtrl: MenuController) { }

  ngOnInit() {
  }
  showContent(value: any) {
    this.shownContent = value;
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ionViewWillLeave() {
    this.menuCtrl.enable(true);
  }
}
