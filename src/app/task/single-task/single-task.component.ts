import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-single-task',
  templateUrl: './single-task.component.html',
  styleUrls: ['./single-task.component.css']
})
export class SingleTaskComponent implements OnInit {

  task: { id: number, title: string };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.task = {
      id: this.route.snapshot.params.id,
      title: this.route.snapshot.params.title,
    };

    this.route.params
      .subscribe(
        (params: Params) => {
          this.task.id = params.id;
          this.task.title = params.title;
        }
      );

  }

}
