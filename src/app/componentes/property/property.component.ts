import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  libro = {"titulo": "El coronel no tiene quien le escriba", "autor": "Gabriel Garcia Marquez", "precio": 2900,
  "stock": 9, "cantidad": 0, "imagen": "assets/el_coronel.jpg"};

}
