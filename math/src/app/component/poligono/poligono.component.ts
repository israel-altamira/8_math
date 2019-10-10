import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CalculateService } from '../../service/calculate.service';

@Component({
  selector: 'poligono',
  templateUrl: './poligono.component.html',
  styleUrls: ['./poligono.component.css']
})
export class PoligonoComponent implements OnInit {

  @ViewChild('canvas') canvasRef: ElementRef;
  @Input() calculateService: CalculateService;

  constructor() {
  }

  ngOnInit() {
  }

  render() {
    const ctx: CanvasRenderingContext2D = this.canvasRef.nativeElement.getContext('2d');

    ctx.fillStyle = '#6ab150';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;

    const X = this.canvasRef.nativeElement.width / 2;
    const Y = this.canvasRef.nativeElement.height / 2;
    const R = 100;
    // el número de lados del polígono
    const L = this.calculateService.data.lados;
    // si L == 5 el ángulo es de 2π/6 o sea 60°
    const rad = (2 * Math.PI) / L;
    // dibuja el trazado
    ctx.beginPath();
    let x = 0;
    let y = 0;
    for (let i = 0; i < L; i++) {
      x = X + R * Math.cos(rad * i);
      y = Y + R * Math.sin(rad * i);
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
}
