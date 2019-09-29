import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BookService} from '../book.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  // @ts-ignore
  @ViewChild('nameInput') name: ElementRef;
  // @ts-ignore
  @ViewChild('authorInput') author: ElementRef;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  onAddBook() {
    const Name = this.name.nativeElement.value;
    const Author = this.author.nativeElement.value;

    this.bookService.onAddBook({name: Name, author: Author});
  }

}
