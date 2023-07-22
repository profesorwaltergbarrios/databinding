import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'databinding';
  Libro = {"titulo": "Hamlet", "autor": "William Shakespeare", "precio": 21.30,
  "stock": 0, "cantidad": 0, "imagen": "assets/old_book.jpg"};
}
