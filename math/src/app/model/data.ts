export class Data {
  private _minimo: number; // numero minimo de lados del poligono
  private _maximo: number; // numero maximo de lados del poligono
  private _lados: number; // numero inicial de lados del poligono
  private _radio: number; // radio del poligono
  private _esperar: number; // en milisegundos

  public set esperar(value: number) {
    this._esperar = value;
  }

  public set minimo(value: number) {
    this._minimo = value;
  }

  public set maximo(value: number) {
    this._maximo = value;
  }

  public set radio(value: number) {
    this._radio = value;
  }

  public set lados(value: number) {
    this._lados = value;
  }

  public get esperar(){return this._esperar};
  public get minimo(){return this._minimo};
  public get maximo(){return this._maximo};
  public get radio(){return this._radio};
  public get lados(){return this._lados};
}
