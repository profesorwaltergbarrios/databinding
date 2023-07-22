import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  templateUrl: './interpolacion.component.html',
  styleUrls: ['./interpolacion.component.css']
})
export class InterpolacionComponent {
  libro = {"titulo": "El coronel no tiene quien le escriba", "autor": "Gabriel Garcia Marquez", "precio": 2900,
  "stock": 9, "cantidad": 0, "imagen": "assets/el_coronel.jpg"};
  
}
