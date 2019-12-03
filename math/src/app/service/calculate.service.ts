import { Injectable } from '@angular/core';
import { Iteracion } from '../model/iteracion';
import { Data } from '../model/data';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  private _data: Data;
  public calculousObservable: Observable<Iteracion>;
  public intervalId: any;

  constructor() {
    this.calculousObservable = new Observable(this.calculousBody());
  }

  public setData(data: Data) {
    this._data = data;
  }

  public getData() {
    return this._data;
  }

  public calculate(): Observable<Iteracion> {
    // NOTA: el mismo observable puede seguir publicando varias veces al mismo .subscribe();
    // this.calculousObservable = new Observable(this.calculousBody());
    return this.calculousObservable;
  }

  public stop() {
    if (!!this.intervalId) {
      clearInterval(this.intervalId);
      console.log('IntervalID fue Detenido');
    }
  }

  private calculousBody() {
    return (observer: Observer<Iteracion>) => {
      const ladosMin = this.getData().minimo;
      const ladosMax = this.getData().maximo;
      const ladosInicio = this.getData().lados;
      const radio = this.getData().radio;

      if (ladosInicio >= ladosMin && ladosInicio <= ladosMax) {
        let ladosPoligono = ladosInicio;
        let index = 0;
        this.intervalId = setInterval(() => {
          if (ladosPoligono < ladosMax) {
            this.calcularTrianguloDelPoligono(index, ladosPoligono, radio, observer);
            ladosPoligono++;
            index++;
          } else {
            observer.complete();
          }
        }, this.getData().esperar);
        console.log('El intervalo ha sido solicitado');
      } else {
        observer.error({
          code: 0,
          minimo: ladosMin,
          maximo: ladosMax,
          lados: ladosInicio,
          condicion: ladosInicio >= ladosMin && ladosInicio <= ladosMax
        });
      }
      console.log('Hemos terminado el Observable Body');
    };
  }

  /*
  Debemos sacar todos los datos necesarios para el calculo del area o perimetro
   - radio (viene del user input)
   - angulos para sacar el lados opuesto y adyacente del triangulo
   */
  private calcularTrianguloDelPoligono(index: number, ladosPoligono: number,
                                       radio: number, observer: Observer<Iteracion>) {
    console.log(`Arreglo de iteraciones length: ${index + 1}`);
    const aprox = new Iteracion();
    aprox.ladosPoligono = ladosPoligono;
    // sacar el angulo dividiendo el numero de lados del poligono:
    // por ej, la longitud de 1 circulo es = (Pi*2 radianes),
    // lo dividimos / 5 para sacar 5 triangulos
    // y volvemos a dividir esos 5 triangulos entre 2
    // ya que estaremos haciendo calculos sobre triangulos rectangulos.
    aprox.hipotenusa = radio;
    aprox.angulo = Math.PI / ladosPoligono;
    // usaremos el coseno para sacar el lado adyacente
    aprox.cos = Math.cos(aprox.angulo);
    aprox.adyacente = aprox.cos * aprox.hipotenusa;
    // usaremos el seno para sacar el lado opuesto
    aprox.sin = Math.sin(aprox.angulo);
    aprox.opuesto = aprox.sin * aprox.hipotenusa;
    console.log(`angulo ${aprox.angulo} // adyacente ${aprox.adyacente} // opuesto ${aprox.opuesto} // hipotenusa ${aprox.hipotenusa}`);
    console.log(`coseno ${Math.cos(aprox.angulo)}, seno ${Math.sin(aprox.angulo)}`);
    // para sacar el area de cada triangulo en el poligono tenemos A = base * altura / 2
    aprox.areaTriangular = (aprox.opuesto) * aprox.adyacente / 2;
    // ahora seteamos el area de tooodooo el poligono
    aprox.area = aprox.areaTriangular * 2 * ladosPoligono;
    // el perimetro es la base por el numero de triangulos del poilgono
    // y en este caso la base es dos veces el lado opuesto del triangulo q calculamos
    aprox.perimetro = (aprox.opuesto * 2) * ladosPoligono;
    aprox.aproximacion = aprox.perimetro / (radio * 2);
    console.log(`${index + 1} // perimeto poligono: ${aprox.perimetro} // PI-aprox: ${aprox.aproximacion}`);
    // qui podemos avisarle al servicio de rendering que ya estan listas las cosas
    // es decir, rendering-service deberia subscribirse al service-iteration
    observer.next(aprox);
  }
}
