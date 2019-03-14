import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
// IMPORTAÇÃO PARA ABRIR OUTRA PÁGINA 

import { DetalhePage } from '../detalhe/detalhe';

import { Icurso } from '../../interfaces/ICurso';

import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lista: Icurso[];

  constructor(public navCtrl: NavController, public cursoProvider: CursosProvider) {
    this.lista = this.cursoProvider.all();



  }
  // ABRIR OUTRA PÁGINA 
  abreDetalhe(item) {
    this.navCtrl.push(DetalhePage, { dados: item });

  }

}
