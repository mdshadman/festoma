import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

 @Component({
  selector: 'app-resort',
  templateUrl: './resort.component.html',
  styleUrls: ['./resort.component.scss']
})
export class ResortComponent implements OnInit {
  constructor(public route: Router, public modal: ModalController) { }

  ngOnInit() {
  }
}
