import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icurso } from '../../interfaces/ICurso';

@Injectable()
export class CursosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CursosProvider Provider');
  }

  all(){
   const lista: Icurso[] = [
      //Conteúdo 01
      {
        id: 1,
        titulo: "Curso de Ionic ",
        descricao: "Aprenda Ionic na Prática",
        valor: 23.90,
        valor_txt: "R$:23,90",
        aulas: [
          {
            id:1,
            ordem: 1,
            titulo: "Introdução ao Curso",
            tempo: "10:00",
            video: "https://youtu.be/Ph8wq1oPUCI",
  
          },
          {
            id: 2,
            ordem: 2,
            titulo: "Realização a Instalação",
            tempo: "05:00",
            video: "https://youtu.be/Ph8wq1oPUCI",
  
          }
        ]
      },
  
      //Conteúdo 02
      {
        id: 2,
        titulo: "Curso de Js ",
        descricao: "Aprenda Js na Prática",
        valor: 23.90,
        valor_txt: "R$:33,90",
        aulas: []
      }
    ];

    return lista;



  }
} 
