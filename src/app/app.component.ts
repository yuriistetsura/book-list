import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookListComponent} from "./components/book-list/book-list.component";
import {HeaderComponent} from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BookListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'paymentop-test';
}
