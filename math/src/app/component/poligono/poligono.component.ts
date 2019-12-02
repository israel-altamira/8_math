import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { Iteracion } from '../../model/iteracion';

@Component({
  selector: 'poligono',
  templateUrl: './poligono.component.html',
  styleUrls: ['./poligono.component.css']
})
export class PoligonoComponent implements OnInit {

  @ViewChild('canvas') canvasRef: ElementRef;

  private ctx: CanvasRenderingContext2D;

  constructor() {
  }

  ngOnInit() {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
  }

  render(iteracion: Iteracion) {
    console.log('==== render poligono ====');

    const W = this.canvasRef.nativeElement.width;
    const H = this.canvasRef.nativeElement.height;
    const X = W / 2;
    const Y = H / 2;
    const R = 100;
    const L = iteracion.ladosPoligono; // el número de lados del polígono
    const RAD = (2 * Math.PI) / L; // si L == 5 el ángulo es de 2π/6 o sea 60°

    // dibuja el trazado
    const ctx = this.ctx;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#6ab150';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.beginPath();

    let x = 0;
    let y = 0;
    for (let i = 0; i < L; i++) {
      x = X + R * Math.cos(RAD * i); // cos(i) = adyacente / hipotenusa(radio) =>
      y = Y + R * Math.sin(RAD * i); // sen(i) = opuesto / hipotenusa
      ctx.lineTo(x, y);
    }

    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}
