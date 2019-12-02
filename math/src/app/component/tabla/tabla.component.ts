import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Iteracion } from '../../model/iteracion';

@Component({
  selector: 'tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablaComponent implements OnInit {

  public iteraciones: Iteracion[] = [];

  constructor(public ref: ChangeDetectorRef, public zone: NgZone) {
    // this.ref.detach();
    // setInterval(() => { this.ref.detectChanges(); }, 1000);
  }

  ngOnInit() {
  }

  clear() {
    this.iteraciones = [];
  }

  render(iteracion: Iteracion) {
    console.log('==== tabla de calculos =====', this.iteraciones);
    this.iteraciones.push(iteracion);
  }
}
