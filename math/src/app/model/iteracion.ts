export class Iteracion {
  private iteracion$: number; // en que iteracion del calculo de PI vamos
  private perimetro$: number;
  private area$: number;
  private areaTriangular$: number;
  private aproximacion$: number;

  public set perimetro(value: number) {
    this.perimetro$ = value;
  }

  public set iteracion(value: number) {
    this.iteracion$ = value;
  }

  public set area(value: number) {
    this.area$ = value;
  }

  public set areaTriangular(value: number) {
    this.areaTriangular$ = value;
  }

  public set aproximacion(value: number) {
    this.aproximacion$ = value;
  }
}
