# Proyecto Math

Generado con [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Objetivo
Calcular una aproximacion de PI.
El metodo que utilize es el de aproximar PI mediante la division de
los perimetros de poligonos circunscritos entre el radio del circulo.

## Expliacion del metodo
Debido a que se va usando un poligono con muchos mas lados en cada iteracion,
el perimetro de dicho poligono se acerca cada vez mas al perimetro del circulo que los circunscribe.
Si se divide ese perimetro, cada vez, entre el radio del circulo/poligono, la constante 
resultante es una aproximaion a PI. 

## Formulas 

<ul>
      <li><strong>perimetro del circulo</strong></li>
      <li>radio*(PI*2) [en radianes]</li>
      <li><strong>Angulo de 1 de los triangulos del poligono</strong></li>
      <li>radio*(PI*2) / #lados_del_poligono# [en radianes]</li>
      <li><strong>Angulo del triangulo rectangulo para calcular</strong></li>
      <li>radio*(PI*2) / (#lados_del_poligono#*2) => radio*PI / #lados-del-poligono#</li>
      <li><strong>Hipotenusa = Radio</strong></li>
</ul>

<img width="350" src="http://calculo.cc/temas/temas_geometria/perimetro_area/imagenes/teoria/polReg_hexagono/t_1_1.gif">
<img width="350" src="https://www.edu.xunta.es/espazoAbalar/sites/espazoAbalar/files/datos/1445431121/contido/ud3/3221_imagen_teoria_elementos_poligono_regular.png">


## Historial de cambios
  <ul>
    <li>no time - investigar sobre canvas</li>
    <li>no time - investigar como dibujar el poligono</li>
    <li>no time - investigar radianes</li>
    <li>no time - recordar fundamentos de funciones trigonometricas sin, cos, tan</li>
    <li>no time - investigar como hacer un observable</li>
    <li>no time - implementar el calculo de las iteraciones en un observable</li>
    <li>27/11/2019 9:00: buscar por que no se refrescan el poligono y la tabla (markForChange, detectChange,
      changeDetection: ChangeDetectionStrategy.OnPush)
    </li>
    <li>27/11/2019 9:00: buscar por que no se refrescan el poligono y la tabla (cambio de FOR a un setInterval)</li>
    <li>https://stackoverflow.com/questions/41364386/whats-the-difference-between-markforcheck-and-detectchanges</li>
    <li>27/11/2019 12:00: darle bordes a las filas</li>
    <li>27/11/2019 12:00: darle background color gris a las filas</li>
    <li>27/11/2019 12:00: borrar antes de pintar cada poligono</li>
    <li>27/11/2019 13:00 funcion para parar el programa: clearInterval</li>
    <li>https://www.w3schools.com/jsref/met_win_setinterval.asp</li>
    <li>27/11/2019 13:47 ligar la funcionalidad al boton stop</li>
    <li>27/11/2019 14:11 ligar el formulario al modelo</li>
    <li>02/12/2019 12:30 https://medium.com/@luukgruijs/understanding-creating-and-subscribing-to-observables-in-angular-426dbf0b04a3
    <li>03/12/2019 12:30 de alguna forma mostrar las formulas en la pagina para cerciorarse de que los datos arrojados son correctos</li>
    <li>28/12/2019 12:00 - actualize este readme</li>
  </ul>


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
