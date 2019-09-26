import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() bookAdded = new EventEmitter();
  name: string;
  author: string;

  constructor() {
  }

  ngOnInit() {
  }

  onAddBook() {
    this.bookAdded.emit({
      name: this.name,
      author: this.author
    });
  }

}
