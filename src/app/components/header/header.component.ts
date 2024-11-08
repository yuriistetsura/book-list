import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {debounceTime, Subscription} from "rxjs";
import {ManageBookService} from "../../services/manage-book.service";
import {EMPTY_SUBSCRIPTION} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  private bookService: ManageBookService = inject(ManageBookService);
  protected readonly searchQuery = this.bookService.searchQuery;

  searchControl: FormControl = new FormControl("");
  searchSubscription: Subscription = EMPTY_SUBSCRIPTION;

  ngOnInit() {
    this.searchSubscription = this.searchControl.valueChanges.pipe(
      debounceTime(200)
    ).subscribe(searchTerm => this.searchQuery.set(searchTerm));
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }
}
