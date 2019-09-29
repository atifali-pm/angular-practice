import {EventEmitter} from '@angular/core';

export class BookService {
  newBookAdded = new EventEmitter<{name: string, author: string}[]>();
  private books = [];

  getBooks() {
    return this.books.slice();
  }

  onAddBook(book: {name: string, author: string}) {
    this.books.push({
      name: book.name,
      author: book.author,
    });
    this.newBookAdded.emit(this.getBooks());
  }


}
