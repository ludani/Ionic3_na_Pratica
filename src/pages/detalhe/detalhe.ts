import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AulaPage } from '../aula/aula';
import { Icurso } from '../../interfaces/ICurso';


@IonicPage()
@Component({
  selector: 'page-detalhe',
  templateUrl: 'detalhe.html',
})
export class DetalhePage {

  item:Icurso; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get('dados');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhePage');
  }

  // ABRIR OUTRA PÁGINA 
  abreAula(item) {
    this.navCtrl.push(AulaPage, {dados: item});

  }


}
