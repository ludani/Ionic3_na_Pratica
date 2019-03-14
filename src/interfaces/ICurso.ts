import { Iaula } from './Iaula';

 export interface Icurso {
      id: number;
      titulo: string;
      descricao: string;
      valor: number;
      valor_txt: string;
      aulas: Iaula[]; 
}