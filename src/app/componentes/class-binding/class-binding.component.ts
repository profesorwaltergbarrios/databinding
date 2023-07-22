import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent {
  libro = {"titulo": "El coronel no tiene quien le escriba", "autor": "Gabriel Garcia Marquez", "precio": 2900,
  "stock": 0, "cantidad": 0, "imagen": "assets/el_coronel.jpg"};

}
