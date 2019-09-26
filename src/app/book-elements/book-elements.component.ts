import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-book-elements',
  templateUrl: './book-elements.component.html',
  styleUrls: ['./book-elements.component.css']
})
export class BookElementsComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('serBook') book;
  constructor() { }

  ngOnInit() {
  }

}
