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

  public form: FormGroup;
  public data = new Data();
  public title = 'Polygonal Rendering and PI calculate';

  constructor(public calculateService: CalculateService,
              public changeDetectorRef: ChangeDetectorRef) {

    this.form = new FormGroup({
      minimo: new FormControl(),
      maximo: new FormControl(),
      lados: new FormControl(),
      radio: new FormControl(),
      pausa: new FormControl()
    });

    this.form.valueChanges.subscribe((model) => {
      this.data.ladosMin = model.nombreControl;
      this.data.ladosMax = model.nombreControl;
      this.data.lados = model.nombreControl;
      this.data.radio = model.nombreControl;
      this.data.esperar = model.nombreControl;
      this.calculateService.data = this.data;
    });
  }

  ngOnInit(): void {
  }

  public onCalculate(): void {
    const self = this;
    self.tabla.clear();
    this.calculateService.calculate().subscribe(
      (iteracion: Iteracion) => {
        console.log('======Next=====', iteracion);
        self.poligono.render(iteracion);
        self.tabla.render(iteracion);
      },
      () => {
        console.log('=== sequence finished.');
      }
    );
    console.log('ya pasamos la llamada al subscribe');
  }

  public onStop() {
    this.calculateService.stop();
  }
}
