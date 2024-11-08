import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {Book} from "../../common/models/book.models";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {BookDetailsFormComponent} from "../book-details-form/book-details-form.component";

@Component({
  selector: 'book-details',
  standalone: true,
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatDialogModule, BookDetailsFormComponent],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookDetailsComponent {
  isEdit = false;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public book: Book,
  ) {}

  openBookDetailsForm(): void {
    this.isEdit = true;
  }
}
