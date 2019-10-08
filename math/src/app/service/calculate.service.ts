import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {IteracionService} from './iteracion.service';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  public dataService: DataService;
  public iteracionService: IteracionService;

  constructor() {
  }

  public setDataService(dataService: DataService) {
    this.dataService = dataService;
  }

  public setIteracionService(iteracionService: IteracionService) {
    this.iteracionService = iteracionService;
  }

  public calculatePi() {
    const ladosMin = this.dataService.data.ladosMin;
    const ladosMax = this.dataService.data.ladosMax;
    const ladosInicio = this.dataService.data.lados;
    const radio = this.dataService.data.radio;
    if (ladosInicio >= ladosMin && ladosInicio <= ladosMax) {
      for (let i = ladosInicio; i < ladosMax; i++) {
        this.calcularTrianguloDelPoligono(i, radio);
        // esperar milisegundos por iteracion para graficar
        // this.dataService.data.esperar;
        // avisar con el iteration-service los resultados de la iteracion
      }
    }
  }

  /*
  Debemos sacar todos los datos necesarios para el calculo del area o perimetro
   - radio (viene del user input)
   - angulos para sacar el lados opuesto y adyacente del triangulo
   */
  private calcularTrianguloDelPoligono(iteracion: number, radio: number) {
    this.iteracionService.iteracion.iteracion = iteracion;
    // sacar el angulo dividiendo el numero de lados del poligono:
    // por ej, de un pentagono tenemos 360 / 2 para sacar 5 triangulos
    // y volvemos a dividir esos 5 triangulos entre 2
    // ya que estaremos haciendo calculos sobre triangulos rectangulos.
    const angulo = 360 / 2 / iteracion;
    const hipotenusa = radio;
    // usaremos el coseno para sacar el lado adyacente
    const adyacente = Math.cos(angulo) * hipotenusa;
    // usaremos el seno para sacar el lado opuesto
    const opuesto = Math.sin(angulo) * hipotenusa;
    // para sacar el area tenemos A = base * altura / 2
    // esto es:
    const areaTriangulo = (opuesto * 2) * adyacente / 2;
    // ahora seteamos el area de tooodooo el poligono
    this.iteracionService.iteracion.area = areaTriangulo * iteracion;
    // el perimetro es la base por el numero de triangulos del poilgono
    // y en este caso la base es dos veces el lado opuesto del triangulo q calculamos
    this.iteracionService.iteracion.perimetro = (opuesto * 2) * iteracion;
    this.iteracionService.iteracion.aproximacion = this.iteracionService.iteracion.perimetro / (radio * 2);
    console.log(`${iteracion}
    - perimeto interno: ${this.iteracionService.iteracion.perimetro}
    - diametro: ${radio * 2}
    - PI-iteracion: ${this.iteracionService.iteracion.aproximacion}`);
    // EN TEORIA aqui podriamos avisarle al servicio de rendering que ya estan listas las cosas
    // es decir, rendering-service deberia subscribirse al service-iteration
  }
}
