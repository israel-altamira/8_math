import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalculateService } from './service/calculate.service';
import { Data } from './model/data';
import { PoligonoComponent } from './component/poligono/poligono.component';
import { TablaComponent } from './component/tabla/tabla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('poligono') poligono: PoligonoComponent;
  @ViewChild('tabla') tabla: TablaComponent;

  public form: FormGroup;
  public data = new Data();
  public title = 'Polygonal Rendering and PI calculate';

  constructor(public calculateService: CalculateService) {

    this.form = new FormGroup({
      ladosMin: new FormControl(),
      ladosMax: new FormControl(),
      lados: new FormControl(),
      radio: new FormControl(),
      pausa: new FormControl()
    });

    this.form.valueChanges.subscribe((values) => {
      // cada que haya cambios en los inputs, actualizar el modelo
    });

    this.data.ladosMin = 5;
    this.data.ladosMax = 100;
    this.data.lados = 5;
    this.data.radio = 10; // cm - pendiente escoger escala
    this.data.esperar = 1000;
    this.calculateService.data = this.data;

    // this.calculateService.subscribe((iteracion: Iteracion) => {
    // dibujar los datos de la iteracion
    // });
  }

  ngOnInit(): void {
  }

  public onCalculate(): void {
    this.calculateService.calculatePi();
    this.poligono.render();
    this.tabla.render();
  }

}
