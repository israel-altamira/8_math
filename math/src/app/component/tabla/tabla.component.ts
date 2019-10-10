import { Component, Input, OnInit } from '@angular/core';
import { CalculateService } from '../../service/calculate.service';
import { Iteracion } from '../../model/iteracion';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  @Input() calculateService: CalculateService;

  public iteraciones: Iteracion[];
  public show = false;

  constructor() {
  }

  ngOnInit() {
  }

  render() {
    this.iteraciones = this.calculateService.iteracion;
    this.show = true;
  }
}
