import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  // tslint:disable-next-line:no-input-rename
  @Input('number') evenNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
