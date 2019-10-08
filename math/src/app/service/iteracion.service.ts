import {Injectable} from '@angular/core';
import {Iteracion} from '../model/iteracion';

@Injectable({
  providedIn: 'root'
})
export class IteracionService {

  // public iteraciones: Array<Iteracion>;
  public iteracion: Iteracion;

  constructor() {
  }

}
