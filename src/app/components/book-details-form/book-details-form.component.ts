import {Component, inject, Input, OnChanges, OnDestroy} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../../common/models/book.models";
import {MatButton} from "@angular/material/button";
import {MatDialog, MatDialogClose} from "@angular/material/dialog";
import {MatIcon} from "@angular/material/icon";
import {ManageBookService} from "../../services/manage-book.service";

@Component({
  selector: 'book-details-form',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButton, MatDialogClose, MatIcon,],
  templateUrl: './book-details-form.component.html',
  styleUrl: './book-details-form.component.scss'
})
export class BookDetailsFormComponent implements OnChanges, OnDestroy {
  private fb: FormBuilder = inject(FormBuilder);
  private bookService: ManageBookService = inject(ManageBookService);
  private dialog: MatDialog = inject(MatDialog);

  @Input() bookDetails: Book | null = null;
  @Input() isEdit = false;

  bookForm: FormGroup = this.initializeForm();

  ngOnChanges(): void {
    if (this.bookDetails) {
      this.bookForm.patchValue(this.bookDetails);
    }
  }

  initializeForm(): FormGroup {
    return this.fb.group({
      title: [this.bookDetails?.title, Validators.required],
      author: [this.bookDetails?.author, Validators.required],
      description: [this.bookDetails?.description, Validators.required],
      year: [this.bookDetails?.year, Validators.required],
      genre: [this.bookDetails?.genre, Validators.required],
    });
  }

  save(): void {
    if (this.bookForm.valid) {
      if (this.isEdit) {
        const book: Book = {
          ...this.bookForm.value,
          id: this.bookDetails?.id,
          coverImg: this.bookDetails?.coverImg,
        }
        this.bookService.updateBook(book);
      } else {
        const book: Book = {
          ...this.bookForm.value,
          id: Math.random(),
          coverImg: "https://i.ibb.co/p3RdSSK/not-found.png",
        }
        this.bookService.addBook(book);
      }
      this.dialog.closeAll();
    }
  }

  ngOnDestroy(): void {
    this.bookForm.reset();
  }
}
