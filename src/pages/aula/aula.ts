import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Iaula } from '../../interfaces/Iaula';

@IonicPage()
@Component({
  selector: 'page-aula',
  templateUrl: 'aula.html',
})
export class AulaPage {
    item: Iaula;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('dados');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AulaPage');
  }

}
