import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  libro = {"titulo": "Hamlet", "autor": "William Shakespeare", "precio": 21.30,
  "stock": 0, "cantidad": 0, "imagen": "assets/old_book.jpg"};
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
