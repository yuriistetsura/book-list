import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {Book} from "../../common/models/book.models";
import {MatIcon} from "@angular/material/icon";
import {ManageBookService} from "../../services/manage-book.service";

@Component({
  selector: 'book-card',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCardComponent {
  private bookService: ManageBookService = inject(ManageBookService);

  @Input() bookPreview: Book | undefined;
  @Input() index: number = 0;

  deleteBook(id: number | undefined) {
    this.bookService.deleteBook(id);
  }
}
