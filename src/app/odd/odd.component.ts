import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename no-input-rename
  @Input('number') oddNumber: number;

  constructor() {
  }

  ngOnInit() {
  }

}
