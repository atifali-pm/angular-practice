import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  // tslint:disable-next-line:no-output-native
  @Output() start = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => {
      this.start.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 100);
  }

  stopGame() {
    clearInterval(this.interval);
  }

}
