import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DataService } from './service/data.service';
import { CalculateService } from './service/calculate.service';
import { Data } from './model/data';
import { IteracionService } from './service/iteracion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Polygonal Rendering and PI calculate';

  public form: FormGroup;
  public data: Data;

  constructor(public dataService: DataService,
              public iteracionService: IteracionService,
              public calculateService: CalculateService) {

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
    this.dataService.setValues(this.data); // lados, radio

    // this.calculateService.subscribe((iteracion: Iteracion) => {
    // dibujar los datos de la iteracion
    // polygonRenderComponent.setPolygonData(data, iteracion);
    // });
  }

  ngOnInit(): void {
  }

  public onCalculate(): void {
    this.calculateService.setDataService(this.dataService);
    this.calculateService.setIteracionService(this.iteracionService);
    this.calculateService.calculatePi();
  }

}
