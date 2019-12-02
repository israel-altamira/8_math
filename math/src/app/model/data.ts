export class Data {
  public ladosMin: number; // numero minimo de lados del poligono
  public ladosMax: number; // numero maximo de lados del poligono
  public lados: number; // numero inicial de lados del poligono
  public radio: number; // radio del poligono
  public esperar: number; // en milisegundos
  public continuar: boolean;

  public setEsperar(value: number) {
    this.esperar = value;
  }

  public setLadosMin(value: number) {
    this.ladosMin = value;
  }

  public setLadosMax(value: number) {
    this.ladosMax = value;
  }

  public setRadio(value: number) {
    this.radio = value;
  }

  public setLados(value: number) {
    this.lados = value;
  }
}
