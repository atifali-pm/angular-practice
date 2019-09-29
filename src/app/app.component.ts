import {Component, OnInit} from '@angular/core';
import {BookService} from "./book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BookService]
})
export class AppComponent {
  books = [];

  constructor(private bookService: BookService) {
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.bookService.newBookAdded
      .subscribe(
        (book) => {
          this.books = book;
        }
      );
  }

}
