import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  libro = {"titulo": "El coronel no tiene quien le escriba", "autor": "Gabriel Garcia Marquez", "precio": 2900,
  "stock": 9, "cantidad": 0, "imagen": "assets/el_coronel.jpg"};
  downCantidad(libro:any) {
    if (libro.cantidad > 0)
    {
      libro.cantidad--;
    }

  }
  upCantidad(libro:any) {
    if (libro.cantidad < libro.stock)
    {
      libro.cantidad++;
    }
  }

  getCoord(event:any) {
    console.log(event.clientX + ", " + event.clientY); }
}
