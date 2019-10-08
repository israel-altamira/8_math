import {Injectable} from '@angular/core';
import {Data} from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: Data = new Data();

  constructor() {
  }

  public setValues(data: Data) {
    this.data = data;
  }
}
