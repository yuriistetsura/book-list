import {computed, Injectable, signal, WritableSignal} from "@angular/core";
import {Book} from "../common/models/book.models";
import {BooksMockup} from "../mockups/books.mockup";

@Injectable({
  providedIn: 'root'
})
export class ManageBookService {
  bookListSignal: WritableSignal<Book[]> = signal(BooksMockup);
  searchQuery: WritableSignal<string> = signal("");

  filteredBooks = computed(() => {
    const term = this.searchQuery().toLowerCase();
    return this.bookListSignal().filter((book) => book.title.toLowerCase().includes(term));
  });

  addBook(book: Book) {
    this.bookListSignal.update((books) => [...books, book]);
  }

  updateBook(updatedBook: Book) {
    this.bookListSignal.update((books) =>
      books.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  }

  deleteBook(id: number | undefined) {
    this.bookListSignal.update((books) => books.filter((book) => book.id !== id));
  }
}
