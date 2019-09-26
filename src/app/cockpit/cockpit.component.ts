import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter();
  @Output() blueprintCreated = new EventEmitter();

  serverName;
  serverContent;

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.serverName,
      serverContent: this.serverContent
    });
  }

}
