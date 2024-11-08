import {ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject} from '@angular/core';
import {ManageBookService} from "../../services/manage-book.service";
import {Book} from "../../common/models/book.models";
import {CommonModule} from "@angular/common";
import {MatIconModule} from "@angular/material/icon";
import {BookCardComponent} from "../book-card/book-card.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {BookDetailsComponent} from "../book-details/book-details.component";
import {BookDetailsFormComponent} from "../book-details-form/book-details-form.component";

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    BookCardComponent,
    MatButtonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookListComponent {
  private bookService: ManageBookService = inject(ManageBookService);
  private dialog: MatDialog = inject(MatDialog);
  protected readonly books = this.bookService.filteredBooks;

  openDetails(book: Book) {
    this.dialog.open(BookDetailsComponent, {
      data: book,
    });
  }

  openAddForm() {
    const dialogRef = this.dialog.open(BookDetailsFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bookService.addBook(result);
      }
    });
  }
}
