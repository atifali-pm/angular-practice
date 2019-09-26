import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books = [{name: 'test book', author: 'test author'}];

  bookCreated(bookData) {
    this.books.push({
      name: bookData.name,
      author: bookData.author
    });
  }

}
