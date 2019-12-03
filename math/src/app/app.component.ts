import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalculateService } from './service/calculate.service';
import { Data } from './model/data';
import { PoligonoComponent } from './component/poligono/poligono.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { Iteracion } from './model/iteracion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  @ViewChild('poligono') poligono: PoligonoComponent;
  @ViewChild('tabla') tabla: TablaComponent;

  public baseform: FormGroup;
  public data = new Data();
  public title = 'Polygonal Rendering and PI calculate';

  constructor(public calculateService: CalculateService,
              public changeDetectorRef: ChangeDetectorRef) {

    const self = this;
    this.data.minimo = 5;
    this.data.maximo = 10;
    this.data.lados = 5;
    this.data.radio = 10;
    this.data.esperar = 1000;

    this.baseform = new FormGroup({
      minimo: new FormControl(self.data.minimo),
      maximo: new FormControl(self.data.maximo),
      lados: new FormControl(self.data.lados),
      radio: new FormControl(self.data.radio),
      pausa: new FormControl(self.data.esperar)
    });

    this.baseform.valueChanges.subscribe((model) => {
      this.data.minimo = Number.parseInt(model.minimo);
      this.data.maximo = Number.parseInt(model.maximo);
      this.data.lados = Number.parseInt(model.lados);
      this.data.radio = Number.parseInt(model.radio);
      this.data.esperar = Number.parseInt(model.pausa);
      console.log('cambio en formulario', model, this.data);
    });
  }

  ngOnInit(): void {
  }

  public onCalculate(): void {
    const self = this;
    self.tabla.clear();
    self.calculateService.setData(this.data);
    this.calculateService.calculate().subscribe(
      (iteracion: Iteracion) => {
        console.log('======Next=====', iteracion);
        self.poligono.render(iteracion);
        self.tabla.render(iteracion);
      },
      (error) => {
        console.log('=== sequence finished by error.', error);
      },
      () => {
        console.log('=== sequence finished by Complete.');
      }
    );
    console.log('ya pasamos la llamada al subscribe');
  }

  public onStop() {
    this.calculateService.stop();
  }
}
